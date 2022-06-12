import type { NextPage } from 'next'
import FadeIn from 'react-fade-in';
import styles from '../../styles/z.module.scss'

import K from '../../assets/img/k.svg'

import Mail from '../../assets/img/social/mail.svg'
import GitHub from '../../assets/img/social/github.svg'
import LinkedIn from '../../assets/img/social/linkedin.svg'
import Twitter from '../../assets/img/social/twitter.svg'
import PageHead from '../_head';

const Copy: NextPage = () => {
  return (
    <div>
      <PageHead description="Card"/>
      <div className={styles.container}>
        <FadeIn delay={200}>
          <div id="title">Kevin Le</div>
          <div id="k"><K/></div>
          <div id="socials">
            <span>
              <Mail/>
              <Twitter/>
              <LinkedIn/>
              <GitHub/>
            </span>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default Copy
