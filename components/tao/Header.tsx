import styles from '../../styles/tao/Header.module.scss'

import Smile from '../../assets/img/smile.svg'
import Copy from '../../assets/img/copy.svg'
import Theme from '../../assets/img/theme.svg'

import Mail from '../../assets/img/social/mail.svg'
import GitHub from '../../assets/img/social/github.svg'
import LinkedIn from '../../assets/img/social/linkedin.svg'
import Twitter from '../../assets/img/social/twitter.svg'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import FadeIn from 'react-fade-in';

const Header = () => {
  const themes = ["light", "dark", "ikea", "spotify", "netflix", "amazon"]

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const [themeIdx, setThemeIdx] = useState(0);

  const [nametag, setNameTag] = useState("Kevin Le")

  const [time, setTime] = useState("")
  const [copyright, setCopyright] = useState(false)

  useEffect(() => setMounted(true), [])

  function CycleTheme() {
    let nextIdx = themeIdx + 1;
    if (nextIdx >= themes.length) {
      nextIdx = 0;
    }

    setThemeIdx(nextIdx);
    setTheme(themes[nextIdx]);
  }

  setInterval(
    () => setTime(new Date().toISOString().replace(/.\d+Z$/g, "")),
    1000
  );

  return (
    <div className={styles.container}>
      <FadeIn>
      <div className={styles.header}>
        <div id="name">{nametag}<br/>
          <span id="title">Software Engineer</span>
        </div>
        <div id="circular_icons">
          <span>
            <a onClick={_ => CycleTheme()}><Theme/></a>
            <a href="#"><Smile/></a>
            <Link href="/copy">
            <a
               onMouseOver={_ => setCopyright(true)}
               onMouseLeave={_ => setCopyright(false)}><Copy/></a></Link>
            { copyright ? <div id="copyright">{time}</div> : null}
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
      </FadeIn>
    </div>
  )
}

export default Header
