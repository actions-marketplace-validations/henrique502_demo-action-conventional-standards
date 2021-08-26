import { deepEqual, notDeepEqual, equal } from 'assert';
import { parseByExt } from '../src/helper';
import {
  jsonData,
  yamlData,
  txtData,
  badData,
} from './mocks';

describe('Helper parseByExt suite', () => {
  it('should be able parse json data', async () => {
    const data = parseByExt(jsonData, '.json');

    equal(data.type, 'json');
    deepEqual(data.value, { version: '1.2.3' });
  });

  it('should be able parse yaml data', async () => {
    const data = parseByExt(yamlData, '.yaml');

    equal(data.type, 'yaml');
    deepEqual(data.value, { version: '1.2.3' });
  });

  it('should be able parse yml data', async () => {
    const data = parseByExt(yamlData, '.yml');

    equal(data.type, 'yaml');
    deepEqual(data.value, { version: '1.2.3' });
  });

  it('should be able parse txt data', async () => {
    const data = parseByExt(txtData, '.txt');

    equal(data.type, 'text');
    deepEqual(data.value, { version: '1.2.3' });
  });

  it('should be able parse txt bad data', async () => {
    const data = parseByExt(badData, '.txt');

    equal(data.type, 'text');
    notDeepEqual(data.value, { version: '1.2.3' });
  });
});
