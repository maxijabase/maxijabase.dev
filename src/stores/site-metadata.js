import { client } from '$lib/graphql-client'
import {
  authorsQuery,
  siteMetadataQuery,
} from '$lib/graphql-queries'
import { writable } from 'svelte/store'

export const authorsStore = writable([])
export const siteMetadataStore = writable([])

export const fetchAuthors = async () => {
  const { authors } = await client.request(authorsQuery)
  return authorsStore.set(authors[0])
}

export const fetchSiteMetadata = async () => {
  const { projectMetadatas } = await client.request(siteMetadataQuery)
  return siteMetadataStore.set(projectMetadatas[0])
}
