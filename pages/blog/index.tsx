import type { NextPage } from "next";

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import PageHead from "../_head";

export const getStaticProps = () => {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug, // Path (based on MD file name)
      frontmatter, // [key: string]: any
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const Blog: NextPage = ({ posts }: any) => {
  return (
    <div>
      <PageHead pageName="Blog" description="Random posts" appendName={true} />
      <ul className="posts">
        {posts.map(
          (
            { slug, frontmatter }: any, // Sorry
          ) => (
            <li key={slug}>
              <div>
                <span id="date">{frontmatter.date}</span>
                <br />
                <Link href={`/blog/post/${slug}`} passHref={true}>
                  <span className="link" id="title">
                    {frontmatter.title}
                  </span>
                </Link>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Blog;
