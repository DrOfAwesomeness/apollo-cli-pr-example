#!/bin/bash

# This test project was placed under the apollo-cli source code
CLI_BIN=../packages/apollo-cli/bin/run

$CLI_BIN codegen:generate --schema=schema.graphql --target=typescript --codeGenerationModule="../../dothing" out
