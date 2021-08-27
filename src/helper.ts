import { extname, join } from 'path';
import fs from 'fs';
import YAML from 'js-yaml';
import get from 'lodash/get';
import { paramCase } from 'param-case';
import { Context } from '@actions/github/lib/context';
import semver from 'semver/functions/valid';

export const getWorkspace = (): string => {
  const workspace = process.env.GITHUB_WORKSPACE;

  if (workspace === undefined) {
    throw new ReferenceError('GITHUB_WORKSPACE env variable is not set');
  }

  if (!fs.existsSync(workspace)) {
    throw new ReferenceError('GITHUB_WORKSPACE env variable is not valid');
  }

  return workspace;
};

export const getProjectName = (context: Context): string => {
  const name = context.payload.repository?.name;
  if (!name) {
    throw new ReferenceError('context.payload.repository.name not found');
  }

  return paramCase(name);
};

export const parseByExt = (data: string, ext: string): { type: string, value: unknown } => {
  switch (ext.toLowerCase()) {
    case '.json':
      return { type: 'json', value: JSON.parse(data) };
    case '.yaml':
    case '.yml':
      return { type: 'yaml', value: YAML.load(data) };
    default:
      return { type: 'text', value: { version: data.trim() } };
  }
};

export const getVersion = (file: string, key: string = 'version'): string => {
  const ext = extname(file);
  const fullpath = join(getWorkspace(), file);
  const raw = fs.readFileSync(fullpath, 'utf-8');
  const obj = parseByExt(raw, ext);
  const version = get(obj.value, key, 'notfound');

  if (version === 'notfound') {
    throw new ReferenceError('version-key is invalid');
  }

  if (!semver(version)) {
    throw new ReferenceError('It\'s is mandatory to use the pattern semver in the version');
  }

  return version;
};

export const escapeRegExp = (string: string): string => string.replace('/', '\\/');

export default {
  getProjectName,
  getVersion,
  getWorkspace,
  parseByExt,
  escapeRegExp,
};
