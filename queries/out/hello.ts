/* tslint:disable */
// This file was automatically generated and should not be edited.

import codeGenerationModule from "../../dothing";
import gql from "graphql-tag";

// ====================================================
// GraphQL query operation: hello
// ====================================================

export interface hello {
  hello: string;
}

export const doHello = codeGenerationModule<hello, null, {
  operationType: "query";
}>(gql`query hello {
  hello
}`, {
  operationType: "query"
});
