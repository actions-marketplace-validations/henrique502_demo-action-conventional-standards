import * as core from '@actions/core';
import * as github from '@actions/github';
import handler from './handler';
import inputs from './inputs';
import outputs from './outputs';

async function run() {
  try {
    const data = await handler(github.context, inputs());
    outputs(data);
  } catch (error) {
    core.setFailed(error);
  }
}

run();
