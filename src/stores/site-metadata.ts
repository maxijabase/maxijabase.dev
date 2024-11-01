import { client } from '$lib/graphql/graphql-client';
import {
  authorsQuery,
  postQuery,
  postsQuery,
  projectQuery,
  projectsQuery
} from '$lib/graphql/graphql-queries';
import type { Author } from '$lib/models/author';
import type { Post } from '$lib/models/post';
import type { Project } from '$lib/models/project';

export const fetchAuthor = async (): Promise<Author> => {
  const { authors } = await client.request<{ authors: Author[] }>(authorsQuery);
  return authors[0];
};

export const fetchProjects = async (): Promise<Project[]> => {
  const { projects } = await client.request<{ projects: Project[] }>(projectsQuery);
  return projects;
};

export const fetchProject = async (slug: string): Promise<Project> => {
  const { project } = await client.request<{ project: Project }>(projectQuery, { slug });
  return project;
};

export const fetchPosts = async () => {
  const { posts } = await client.request<{ posts: Post[] }>(postsQuery);
  return posts;
};

export const fetchPost = async (slug: string) => {
  const { post } = await client.request<{ post: Post }>(postQuery, { slug });
  return post;
};
