import { join } from 'path';
import { Context } from '@actions/github/lib/context';
import { isEmpty } from 'lodash';
import { getProjectName, getVersion, escapeRegExp } from './helper';
import { Inputs } from './inputs';
import { Outputs } from './outputs';

const handler = async (context: Context, inputs: Inputs): Promise<Outputs> => {
  const projectName = getProjectName(context);
  const shortSha = context.sha.substring(0, 8);
  const version = getVersion(inputs.versionFile, inputs.versionKey);

  const containerTag = [
    version,
    shortSha,
  ].join('-');

  const containerRepository = `${projectName}-${inputs.environment}`;
  const containerUrl = `${inputs.containerRegistry}/${containerRepository}`;
  const containerImage = `${containerUrl}:${containerTag}`;

  let chartLocation: string = join('charts', projectName, version);
  if (inputs.chartsPath && !isEmpty(inputs.chartsPath)) {
    chartLocation = join(inputs.chartsPath, chartLocation);
  }

  return {
    environment: inputs.environment,
    containerRegistry: inputs.containerRegistry,
    containerRegistryEscaped: escapeRegExp(inputs.containerRegistry),
    version,
    containerRepository,
    containerRepositoryEscaped: escapeRegExp(containerRepository),
    containerUrl,
    containerUrlEscaped: escapeRegExp(containerUrl),
    containerTag,
    containerTagEscaped: escapeRegExp(containerTag),
    containerImage,
    containerImageEscaped: escapeRegExp(containerImage),
    shortSha,
    projectName,
    chartLocation,
  };
};

export default handler;
