import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

import PageHead from "../../_head";

export const getStaticPaths = () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params: { slug } }: any) => {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
};

const readingTime = (text: string) => {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};

export const Post = ({ frontmatter, content, slug }: any) => {
  const src = `https://github.com/kevinle-1/kevinle-1.github.io/blob/main/posts/${slug}.md?plain=1`;

  return (
    <div>
      <PageHead
        pageName={frontmatter.title}
        description={frontmatter.metaDesc}
        og={frontmatter.title}
        appendName={false}
      />
      <div className="body">
        <h1>{frontmatter.title}</h1>
        <div className="metadata">
          <strong>
            {frontmatter.date} · {readingTime(content)} Minutes ·{" "}
            <a id="edit" href={src} target="_blank" rel="noreferrer">
              Edit
            </a>
          </strong>
        </div>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </div>
  );
};

export default Post;
