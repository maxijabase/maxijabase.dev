import { client } from '$lib/graphql-client'
import { authorsQuery, projectsQuery, siteMetadataQuery } from '$lib/graphql-queries'
import { writable } from 'svelte/store'

export const projectsStore = writable([])
export const authorsStore = writable([])
export const siteMetadataStore = writable([])
export const loading = writable(false)

export const fetchAuthors = async () => {
  const { authors } = await client.request(authorsQuery)
  return authorsStore.set(authors[0])
}

export const fetchProjects = async () => {
  loading.set(true)
  const { projects } = await client.request(projectsQuery)
  loading.set(false)
  return projectsStore.set(projects)
}

export const fetchSiteMetadata = async () => {
  const { projectMetadatas } = await client.request(siteMetadataQuery)
  return siteMetadataStore.set(projectMetadatas[0])
}
