import { join } from 'path';
import { readFileSync } from 'fs';
import { Context } from '@actions/github/lib/context';

export default {};

export const path = join(__dirname, 'files');
export const jsonPath = join(path, 'version.json');
export const yamlPath = join(path, 'version.yaml');
export const txtPath = join(path, 'version.txt');
export const badSemverPath = join(path, 'badsemver.json');
export const badPath = join(path, 'version.notfound');
export const jsonData = readFileSync(jsonPath, 'utf-8');
export const yamlData = readFileSync(yamlPath, 'utf-8');
export const txtData = readFileSync(txtPath, 'utf-8');
export const badSemverData = readFileSync(badSemverPath, 'utf-8');
export const badData = 'badtext';

export const createContext = (replace: object = {}): Context => {
  const data = {
    payload: {
      repository: {
        name: 'action-conventional-standards',
        full_name: 'henrique502/action-conventional-standards',
        owner: {
          login: 'henrique502',
          name: undefined,
        },
        html_url: undefined,
      },
      issue: undefined,
      pull_request: undefined,
      sender: undefined,
      action: undefined,
      installation: undefined,
      comment: undefined,
    },
    eventName: '',
    sha: '1157b612c58279b6dc70ba8fa1646bf8b2edfb46',
    ref: '',
    workflow: '',
    action: '',
    actor: '',
    job: '',
    runNumber: 0,
    runId: Math.ceil(Math.random() * (2000 - 1) + 1),
    apiUrl: '',
    serverUrl: '',
    graphqlUrl: '',
    issue: { owner: '', repo: '', number: 0 },
    repo: { owner: 'henrique502', repo: 'action-conventional-standards' },
  };

  return { ...data, ...replace };
};
