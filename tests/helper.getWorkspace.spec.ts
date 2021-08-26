import {
  equal,
  throws,
} from 'assert';
import { getWorkspace } from '../src/helper';

import { path } from './mocks';

describe('Helper getWorkspace suite', () => {
  it('should be able get workspace dir', async () => {
    process.env.GITHUB_WORKSPACE = path;

    const dir = getWorkspace();
    equal(dir, path);
  });

  it('should throw exception because is undefined', async () => {
    delete process.env.GITHUB_WORKSPACE;
    const expected = {
      name: 'ReferenceError',
      message: 'GITHUB_WORKSPACE env variable is not set',
    };

    throws(() => { getWorkspace(); }, expected);
  });

  it('should throw exception because is not valid', async () => {
    process.env.GITHUB_WORKSPACE = `${path}/notgound`;
    const expected = {
      name: 'ReferenceError',
      message: 'GITHUB_WORKSPACE env variable is not valid',
    };

    throws(() => { getWorkspace(); }, expected);
  });
});
