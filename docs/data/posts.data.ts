import dayjs from "dayjs";
import { createContentLoader } from "vitepress";

export interface Post {
  title: string;
  url: string;
  date: string;
  excerpt: string | undefined;
  categories?: string[];
}

declare const data: Post[];

export { data };

export default createContentLoader("posts/**/*.md", {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => {
        return {
          title: frontmatter.title,
          url,
          excerpt,
          date: frontmatter.date,
          categories: !frontmatter.categories
            ? undefined
            : typeof frontmatter.categories === "string"
            ? [frontmatter.categories]
            : frontmatter.categories,
        };
      })
      .sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1));
  },
});
