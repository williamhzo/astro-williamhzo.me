export type Frontmatter = {
  title: string;
  publishedDate: string; // needs to be Date
  description: string;
  slug: string;
  publish: boolean;
  draft?: boolean;
};
