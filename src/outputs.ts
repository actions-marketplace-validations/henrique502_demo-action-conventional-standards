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
  projectName: string;
  projectUrl: string;

  containerImageEscaped: string;
  containerRegistryEscaped: string;
  containerRepositoryEscaped: string;
  containerTagEscaped: string;
  containerUrlEscaped: string;
  projectUrlEscaped: string;
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
  core.setOutput('project-url', data.projectUrl);
  core.setOutput('project-name', data.projectName);

  core.setOutput('container-image-escaped', data.containerImageEscaped);
  core.setOutput('container-registry-escaped', data.containerRegistryEscaped);
  core.setOutput('container-repository-escaped', data.containerRepositoryEscaped);
  core.setOutput('container-tag-escaped', data.containerTagEscaped);
  core.setOutput('container-url-escaped', data.containerUrlEscaped);
  core.setOutput('project-url-escaped', data.projectUrlEscaped);
};

export default set;
