import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";
import fetchGraphQL from "./fetch-graphql";

async function fetchRelay(params: RequestParameters, variables: Variables) {
  if (!params.text) {
    return new Promise(() => {
      // never resolve
    });
  }
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
