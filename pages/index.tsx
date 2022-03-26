import type { NextPage } from 'next'

import Link from 'next/link'
import Footer from '../components/Footer'
import styles from '../styles/home.module.scss'
import Logo from '../assets/img/k.svg';

const Home: NextPage = () => {
  const links = [
    ["mailto:contact@kevinle.com.au", "Email"],
    ["https://twitter.com/kevinle_1", "Twitter"],
    ["https://github.com/kevinle-1", "GitHub"],
    ["https://www.linkedin.com/in/kevinle14", "LinkedIn"],
  ]

  return (
    <div className={styles.home}>
      <div className="logo accent">
      <Logo/>
      </div>
      <div className={styles.title}>
        <div className="name accent">Kevin Le</div>
        <div className="tag space">Software <br/>Engineer</div>
      </div>

      <div className={styles.content}>
        <div>
          <div>
            <a className="button" href="/blog">Blog</a>
          </div>
          <div className="links space">
            {
              links.map(function (l) {
                return <div>
                  <a className="button" href={l[0]} target="_blank">
                    {l[1]}
                  </a>
              </div>
              })
            }
          </div>

          <div className="space">
            <a className="button" href="#">Resume</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home