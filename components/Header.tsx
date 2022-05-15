import styles from '../styles/Header.module.scss'

import Smile from '../img/smile.svg'
import Copy from '../img/copy.svg'
import Theme from '../img/theme.svg'

import Mail from '../img/social/mail.svg'
import GitHub from '../img/social/github.svg'
import LinkedIn from '../img/social/linkedin.svg'
import Twitter from '../img/social/twitter.svg'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div id="name">Kevin Le</div>
        <div id="circular_icons">
          <span>
            <Theme/>
            <Smile/>
            <Copy/>
          </span>
        </div>
        <div id="socials">
          <span>
            <Mail/>
            <Twitter/>
            <LinkedIn/>
            <GitHub/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
