import { equal } from 'assert';
import { escapeRegExp } from '../src/helper';

describe('Helper escapeRegExp suite', () => {
  it('should be able to escape value 1', async () => {
    const value = 'henrique502/demo-action-conventional-standards';
    const expected = 'henrique502\\/demo-action-conventional-standards';

    equal(escapeRegExp(value), expected);
  });

  it('should be able to escape value 2', async () => {
    const value = 'demo-action-conventional-standards';
    const expected = 'demo-action-conventional-standards';

    equal(escapeRegExp(value), expected);
  });
});
