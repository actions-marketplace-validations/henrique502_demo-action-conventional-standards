import { deepEqual } from 'assert';
import handler from '../src/handler';
import { Inputs } from '../src/inputs';
import { Outputs } from '../src/outputs';
import { createContext, jsonPath } from './mocks';

describe('Handler flow suite', () => {
  it('should be able to proccess stage', async () => {
    process.env.GITHUB_WORKSPACE = '/';
    const context = createContext();
    const inputs: Inputs = {
      containerRegistry: 'registry.hub.docker.com',
      environment: 'stg',
      versionFile: jsonPath,
      versionKey: 'version',
      chartsPath: undefined,
    };
    const expected: Outputs = {
      containerRegistry: 'registry.hub.docker.com',
      environment: 'stg',
      version: '1.2.3',
      shortSha: '1157b612',
      projectName: 'action-conventional-standards',
      projectUrl: 'henrique502/action-conventional-standards',
      projectUrlEscaped: 'henrique502\\/action-conventional-standards',
      containerRepository: 'action-conventional-standards-stg',
      containerUrl: 'registry.hub.docker.com/action-conventional-standards-stg',
      containerTag: `1.2.3-${context.runId}-1157b612`,
      containerImage: `registry.hub.docker.com/action-conventional-standards-stg:1.2.3-${context.runId}-1157b612`,
      chartLocation: `charts/action-conventional-standards/1.2.3-${context.runId}-1157b612`,
      containerImageEscaped: `registry.hub.docker.com\\/action-conventional-standards-stg:1.2.3-${context.runId}-1157b612`,
      containerRegistryEscaped: 'registry.hub.docker.com',
      containerRepositoryEscaped: 'action-conventional-standards-stg',
      containerTagEscaped: `1.2.3-${context.runId}-1157b612`,
      containerUrlEscaped: 'registry.hub.docker.com\\/action-conventional-standards-stg',
    };

    const data = await handler(context, inputs);
    deepEqual(data, expected);
  });

  it('should be able to proccess sandbox', async () => {
    process.env.GITHUB_WORKSPACE = '/';
    const context = createContext();
    const inputs: Inputs = {
      containerRegistry: 'registry.hub.docker.com',
      environment: 'sdx',
      versionFile: jsonPath,
      versionKey: 'version',
      chartsPath: undefined,
    };
    const expected: Outputs = {
      containerRegistry: 'registry.hub.docker.com',
      environment: 'sdx',
      version: '1.2.3',
      shortSha: '1157b612',
      projectName: 'action-conventional-standards',
      projectUrl: 'henrique502/action-conventional-standards',
      projectUrlEscaped: 'henrique502\\/action-conventional-standards',
      containerRepository: 'action-conventional-standards-sdx',
      containerUrl: 'registry.hub.docker.com/action-conventional-standards-sdx',
      containerTag: `1.2.3`,
      containerImage: `registry.hub.docker.com/action-conventional-standards-sdx:1.2.3`,
      chartLocation: 'charts/action-conventional-standards/1.2.3',
      containerImageEscaped: 'registry.hub.docker.com\\/action-conventional-standards-sdx:1.2.3',
      containerRegistryEscaped: 'registry.hub.docker.com',
      containerRepositoryEscaped: 'action-conventional-standards-sdx',
      containerTagEscaped: '1.2.3',
      containerUrlEscaped: 'registry.hub.docker.com\\/action-conventional-standards-sdx',
    };

    const data = await handler(context, inputs);
    deepEqual(data, expected);
  });

  it('should be able to proccess production', async () => {
    process.env.GITHUB_WORKSPACE = '/';
    const context = createContext();
    const inputs: Inputs = {
      containerRegistry: 'registry.hub.docker.com',
      environment: 'prd',
      versionFile: jsonPath,
      versionKey: 'version',
      chartsPath: undefined,
    };
    const expected: Outputs = {
      containerRegistry: 'registry.hub.docker.com',
      environment: 'prd',
      version: '1.2.3',
      shortSha: '1157b612',
      projectName: 'action-conventional-standards',
      projectUrl: 'henrique502/action-conventional-standards',
      projectUrlEscaped: 'henrique502\\/action-conventional-standards',
      containerRepository: 'action-conventional-standards-prd',
      containerUrl: 'registry.hub.docker.com/action-conventional-standards-prd',
      containerTag: `1.2.3`,
      containerImage: `registry.hub.docker.com/action-conventional-standards-prd:1.2.3`,
      chartLocation: 'charts/action-conventional-standards/1.2.3',
      containerImageEscaped: 'registry.hub.docker.com\\/action-conventional-standards-prd:1.2.3',
      containerRegistryEscaped: 'registry.hub.docker.com',
      containerRepositoryEscaped: 'action-conventional-standards-prd',
      containerTagEscaped: '1.2.3',
      containerUrlEscaped: 'registry.hub.docker.com\\/action-conventional-standards-prd',
    };

    const data = await handler(context, inputs);
    deepEqual(data, expected);
  });
});
