import { useEffect, useState } from 'react';
import { Mode } from 'vite-plugin-markdown'
import '../assets/styles/blog.scss';
import posts from '../blog/posts.json';

interface attribute {
  date: string,
  description: string,
  title: string
}

async function getPostsAttributes(): Promise<attribute[]> {
  const attributes: attribute[] = []

  const post = await import(/* @vite-ignore */'../blog/posts/xbox-tv-plex.md');
  attributes.push(post.attributes);


  
  // posts["posts"].map(async p => {
  //   const post = await import(/* @vite-ignore */'../blog/posts/' + p );
  //   attributes.push(post.attributes);
  // });

  return attributes;
}

function Blog() {
  const [attributes, setAttributes] = useState<attribute[]>([]);

  useEffect(() => {
    getPostsAttributes().then(a =>{
      setAttributes(a);
    });
  }, [])

  //console.log(attributes);
  return (
    <div className="blog">
      <div className="accent">Blog</div>
      <div className="entries">
        <ul>
          {
            attributes.map((a, i) => {
              return <li key={i} className="entry first">
                <div className="date">{a.date}</div>
                <div className="title">
                  <a href="">{a.title}</a>
                </div>
              </li>;
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Blog
