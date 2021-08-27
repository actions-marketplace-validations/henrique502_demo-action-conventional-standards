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
  chartLocation: string;
};

const set = (data: Outputs): void => {
  core.setOutput('environment', data.environment);
  core.setOutput('version', data.version);
  core.setOutput('container-registry', data.containerRegistry);
  core.setOutput('container-repository', data.containerRepository);
  core.setOutput('container-tag', data.containerTag);
  core.setOutput('container-url', data.containerUrl);
  core.setOutput('container-image', data.containerImage);
  core.setOutput('chart-location', data.chartLocation);
};

export default set;
