# Pagar.me Demo Conventional Standards

Utility with some conventional patterns for deploying branch-versioned services

## Example

```yaml
name: Publish

on:
  push:
    branches:
      - main
      - develop
  pull_request:
      types: [opened, synchronize, reopened]

jobs:
  configure:
    runs-on: ubuntu-latest
    outputs:
      environment: ${{ steps.config.outputs.environment }}
      version: ${{ steps.config.outputs.version }}
      project-name: ${{ steps.config.outputs.project-name }}
      short-sha: ${{ steps.config.outputs.short-sha }}
      container-registry: ${{ steps.config.outputs.container-registry }}
      container-repository: ${{ steps.config.outputs.container-repository }}
      container-tag: ${{ steps.config.outputs.container-tag }}
      container-url: ${{ steps.config.outputs.container-url }}
      container-image: ${{ steps.config.outputs.container-image }}
    steps:
      - uses: actions/checkout@v2
      - name: configure some patterns
        uses: pagarme/action-conventional-standards@v1
        id: config
        with:
          environment: 'stg'
          version-file: 'package.json'
          version-key: 'version'
          container-registry: 'registry.hub.docker.com'

  next-job:
    runs-on: ubuntu-latest
    needs:
      - configure
    steps:
      - name: print
        run: |
          echo "${{ needs.configure.outputs.environment }}"
          echo "${{ needs.configure.outputs.version }}"
          echo "${{ needs.configure.outputs.project-name }}"
          echo "${{ needs.configure.outputs.short-sha }}"
          echo "${{ needs.configure.outputs.container-registry }}"
          echo "${{ needs.configure.outputs.container-repository }}"
          echo "${{ needs.configure.outputs.container-tag }}"
          echo "${{ needs.configure.outputs.container-url }}"
          echo "${{ needs.configure.outputs.container-image }}"
```
