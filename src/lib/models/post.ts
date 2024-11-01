export interface Post {
    title: string;
    slug: string;
    date: Date;
    content: string;
    tags: string[];
    coverImage: {
      url: string
    };
    coverImageCaption: string;
    authors: {
      name: string;
    }[];
  }