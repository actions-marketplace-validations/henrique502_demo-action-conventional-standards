import { Context } from '@actions/github/lib/context';
import { getProjectName, getVersion } from './helper';
import { Inputs } from './inputs';
import { Outputs } from './outputs';

const handler = async (context: Context, inputs: Inputs): Promise<Outputs> => {
  const projectName = getProjectName(context);
  const shortSha = context.sha.substring(0, 8);
  const version = getVersion(inputs.versionFile, inputs.versionKey);

  const containerTag = [
    version,
    context.runId,
    shortSha,
  ].join('-');

  const containerRepository = `${projectName}-${inputs.environment}`;
  const containerUrl = `${inputs.containerRegistry}/${containerRepository}`;
  const containerImage = `${containerUrl}:${containerTag}`;

  return {
    ...inputs,
    version,
    containerRepository,
    containerUrl,
    containerTag,
    containerImage,
    shortSha,
    projectName,
  };
};

export default handler;
