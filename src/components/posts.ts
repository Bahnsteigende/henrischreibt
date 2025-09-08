// src/lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  title: string;
  date: string;
  description?: string;
  image?: string;
  slug: string;
  collection?: string;
}

export interface Post extends PostMeta {
  content: string; // hier speichern wir den Markdown-Text
}


export interface PostMeta {
  title: string;
  date: string;
  description?: string;
  image?: string;
  slug: string;
  collection?: string;
}

export function loadPosts(): PostMeta[] {
  const blogDir = path.resolve("./src/content/blog");
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".md"));

  return files
    .map((filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        slug: filename.replace(".md", ""),
        collection: data.collection,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}


export function loadPostBySlug(slug: string): Post {
  const blogDir = path.resolve("./src/content/blog");
  const filePath = path.join(blogDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    date: data.date,
    description: data.description,
    image: data.image,
    slug,
    collection: data.collection,
    content, // hier wird der Markdown-Inhalt gespeichert
  };
}