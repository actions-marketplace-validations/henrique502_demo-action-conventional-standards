import { equal } from 'assert';
import { generateTag } from '../src/helper';

import { createContext } from './mocks';

describe('Helper generateTag suite', () => {
  it('should be able generate stage tag', async () => {
    const context = createContext();
    const version = '1.2.3';
    const shortSha = '12345678';
    const environment = 'stg';
    const expected = `${version}-${context.runId}-${shortSha}`;

    equal(generateTag({
      context,
      environment,
      shortSha,
      version,
    }), expected);
  });

  it('should be able generate sandbox tag', async () => {
    const context = createContext();
    const version = '1.2.3';
    const shortSha = '12345678';
    const environment = 'sdx';
    const expected = '1.2.3';

    equal(generateTag({
      context,
      environment,
      shortSha,
      version,
    }), expected);
  });

  it('should be able generate production tag', async () => {
    const context = createContext();
    const version = '1.2.3';
    const shortSha = '12345678';
    const environment = 'prd';
    const expected = '1.2.3';

    equal(generateTag({
      context,
      environment,
      shortSha,
      version,
    }), expected);
  });
});
