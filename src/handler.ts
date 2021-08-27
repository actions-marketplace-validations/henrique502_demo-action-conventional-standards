import { join } from 'path';
import { Context } from '@actions/github/lib/context';
import { isEmpty } from 'lodash';
import { getProjectName, getVersion } from './helper';
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
    version,
    containerRepository,
    containerUrl,
    containerTag,
    containerImage,
    shortSha,
    projectName,
    chartLocation,
  };
};

export default handler;
