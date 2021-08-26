import {
  equal,
  throws,
} from 'assert';
import { getProjectName } from '../src/helper';
import { createContext } from './mocks';

describe('Helper getProjectName suite', () => {
  it('should be able get project name', async () => {
    const context = createContext();
    const name = getProjectName(context);

    equal(name, 'action-conventional-standards');
  });

  it('should be able get project name and convert to param case', async () => {
    const context = createContext({
      payload: {
        repository: {
          name: 'actionConventionalStandards',
        },
      },
    });
    const name = getProjectName(context);

    equal(name, 'action-conventional-standards');
  });

  it('should be able get project name', async () => {
    const context = createContext({
      payload: {
        repository: null,
      },
    });
    const expected = {
      name: 'ReferenceError',
      message: 'context.payload.repository.name not found',
    };

    throws(() => { getProjectName(context); }, expected);
  });
});
