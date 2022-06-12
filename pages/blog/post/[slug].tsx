import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Header from '../../../components/k/Header'
import Sidebar from '../../../components/k/Sidebar'
import FadeIn from 'react-fade-in'
import Chevron from '../../../assets/img/chevron.svg'

import styles from '../../../styles/k/Post.module.scss'
import PageHead from '../../_head'

export const getStaticPaths = () => {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = ({ params: { slug } }: any) => {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
      slug
    },
  };
}

const readingTime = (text: string) => {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export const Post = ({ frontmatter, content, slug }: any) => {
  const src = `https://github.com/kevinle-1/kevinle-1.github.io/tree/main/pages/blog/post/${slug}.md`;

  return (
    <div className={styles.post}>
      <PageHead pageName={frontmatter.title}
        description={frontmatter.metaDesc}
        og={frontmatter.title}
        appendName={false}/>
      <Header title={"blog"}/>
      <FadeIn>
        <div className="body">
          <h1>{frontmatter.title}</h1>
          <div className="metadata">
            <strong>{frontmatter.date} · {readingTime(content)} Minutes · <a id="edit" href={src} target="_blank" rel="noreferrer">Edit</a></strong>
          </div>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          <div className="chevron"><Chevron/></div>
        </div>
      </FadeIn>
      <Sidebar sidebarOnly={false} mobileShowIcons={false}/>
    </div>
  );
}

export default Post