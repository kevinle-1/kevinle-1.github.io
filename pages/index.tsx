import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

import Header from '../components/k/Header'
import Sidebar from '../components/k/Sidebar'

import Chevron from '../assets/img/chevron.svg'
import Link from 'next/link'

import PageHead from './_head'

interface Links {
  name: string,
  url: string,
  nextLink?: boolean
}

const Home: NextPage = () => {
  const links: Links[] = [{
    name: "Email",
    url: "mailto:hi@kevle.xyz"
  },
  {
    name: "GitHub",
    url: "https://github.com/kevinle-1"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kevinle14/"
  },
  // {
  //   name: "Resume",
  //   url: "/"
  // },
  {
    name: "Blog",
    url: "/blog",
    nextLink: true
  }];

  return (
    <div className={styles.container}>
      <PageHead description="Software Engineer" appendName={true}/>
      <Header title="Software Engineer"/>
      <Sidebar sidebarOnly={true} mobileShowIcons={true}/>
      <div className="links">
        { links.map(l =>
          l.nextLink == null || l.nextLink == false ?
          <span><a href={l.url} target="_blank" rel="noreferrer">{l.name}</a></span> :
          <span><Link href={l.url}>{l.name}</Link></span>
        )}
      </div>

      <div className="chevron">
        <Chevron/>
      </div>
    </div>
  )
}

export default Home