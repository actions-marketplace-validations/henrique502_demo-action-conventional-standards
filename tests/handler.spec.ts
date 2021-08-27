import { deepEqual } from 'assert';
import handler from '../src/handler';
import { Inputs } from '../src/inputs';
import { Outputs } from '../src/outputs';
import { createContext, jsonPath } from './mocks';

describe('Handler flow suite', () => {
  it('should be able to proccess', async () => {
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
      containerRepository: 'action-conventional-standards-stg',
      containerUrl: 'registry.hub.docker.com/action-conventional-standards-stg',
      containerTag: `1.2.3-1157b612`,
      containerImage: `registry.hub.docker.com/action-conventional-standards-stg:1.2.3-1157b612`,
      chartLocation: 'charts/action-conventional-standards/1.2.3',
    };

    const data = await handler(context, inputs);
    deepEqual(data, expected);
  });
});
