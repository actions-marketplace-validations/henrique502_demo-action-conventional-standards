import {
  throws,
  equal,
} from 'assert';
import { getVersion } from '../src/helper';
import {
  jsonPath,
  yamlPath,
  txtPath,
  badSemverPath,
} from './mocks';

describe('Helper getVersion suite', () => {
  it('should be able get version from version.json', async () => {
    process.env.GITHUB_WORKSPACE = '/';
    const version = getVersion(jsonPath);

    equal(version, '1.2.3');
  });

  it('should be able get version from version.yaml', async () => {
    process.env.GITHUB_WORKSPACE = '/';
    const version = getVersion(yamlPath);

    equal(version, '1.2.3');
  });

  it('should be able get version from version.txt', async () => {
    process.env.GITHUB_WORKSPACE = '/';
    const version = getVersion(txtPath);

    equal(version, '1.2.3');
  });

  it('should throw exception because version key is invalid', async () => {
    process.env.GITHUB_WORKSPACE = '/';
    const expected = {
      name: 'ReferenceError',
      message: 'version-key is invalid',
    };

    throws(() => { getVersion(jsonPath, 'badkey'); }, expected);
  });

  it('should throw exception because is not semver', async () => {
    process.env.GITHUB_WORKSPACE = '/';
    const expected = {
      name: 'ReferenceError',
      message: 'It\'s is mandatory to use the pattern semver in the version',
    };

    throws(() => { getVersion(badSemverPath); }, expected);
  });
});
