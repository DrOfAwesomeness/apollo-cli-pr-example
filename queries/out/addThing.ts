/* tslint:disable */
// This file was automatically generated and should not be edited.

import codeGenerationModule from "../../dothing";
import gql from "graphql-tag";

// ====================================================
// GraphQL mutation operation: addThing
// ====================================================

export interface addThing_addThing {
  id: string;
  name: string | null;
}

export interface addThing {
  addThing: addThing_addThing | null;
}

export interface addThingVariables {
  name: string;
}

export const doAddThing = codeGenerationModule<addThing, addThingVariables, {
  operationType: "mutation";
}>(gql`mutation addThing($name: String!) {
  addThing(name: $name) {
    id
    name
  }
}`, {
  operationType: "mutation"
});
