import * as core from '@actions/core';

export type Outputs = {
  [key: string]: string;
  environment: string;
  version: string;
  containerRegistry: string;
  containerRepository: string;
  containerUrl: string;
  containerTag: string;
  containerImage: string;
};

const set = (data: Outputs): void => {
  core.setOutput('environment', data.environment);
  core.setOutput('version', data.version);
  core.setOutput('container-registry', data.containerRegistry);
  core.setOutput('container-repository', data.containerRepository);
  core.setOutput('container-tag', data.containerTag);
  core.setSecret(data.containerUrl);
  core.setOutput('container-url', data.containerUrl);
  core.setSecret(data.containerImage);
  core.setOutput('container-image', data.containerImage);
};

export default set;
