/* tslint:disable */
// This file was automatically generated and should not be edited.

import codeGenerationModule from "../../dothing";
import gql from "graphql-tag";

// ====================================================
// GraphQL query operation: getThing
// ====================================================

export interface getThing_getThing {
  name: string | null;
}

export interface getThing {
  getThing: getThing_getThing | null;
}

export interface getThingVariables {
  id: string;
}

export const doGetThing = codeGenerationModule<getThing, getThingVariables, {
  operationType: "query";
}>(gql`query getThing($id: ID!) {
  getThing(id: $id) {
    name
  }
}`, {
  operationType: "query"
});
