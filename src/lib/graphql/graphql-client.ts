import { GraphQLClient } from 'graphql-request'
const HYGRAPH_ENDPOINT = import.meta.env.VITE_HYGRAPH_ENDPOINT
if (HYGRAPH_ENDPOINT === undefined) {
    throw("VITE_HYGRAPH_ENDPOINT variable not set!")
}
export const client = new GraphQLClient(HYGRAPH_ENDPOINT)
