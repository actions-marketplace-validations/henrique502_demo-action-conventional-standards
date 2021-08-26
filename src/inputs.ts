import * as core from '@actions/core';

export type Inputs = {
  [key: string]: string;
  versionFile: string;
  versionKey: string;
  environment: string;
  containerRegistry: string;
};

const get = (): Inputs => ({
  environment: core.getInput('environment', { required: true }),
  versionFile: core.getInput('version-file', { required: true }),
  versionKey: core.getInput('version-key', { required: true }),
  containerRegistry: core.getInput('container-registry', { required: true }),
});

export default get;
