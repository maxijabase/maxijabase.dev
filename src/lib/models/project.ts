export interface Project {
    name: string;
    slug: string;
    description: string;
    about: string;
    tags: string[];
    demo: string;
    sourceCode: string;
    image: {
      url: string
    }[];
  }