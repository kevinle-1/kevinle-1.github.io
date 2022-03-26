import styles from '../styles/footer.module.scss'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function Footer() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const [themeIdx, setThemeIdx] = useState(0);
  const themes = ["on", "off", "ikea"]

  useEffect(() => setMounted(true), [])

  function CycleTheme() {
    let nextIdx = themeIdx + 1;
    if (nextIdx >= themes.length) {
      nextIdx = 0;
    }

    setThemeIdx(nextIdx);
    setTheme(themes[nextIdx]);
  }

  return (
    <div className={styles.footer}>
      <div className={styles.switch + " button"}
          onClick={() => CycleTheme()}
        >OFF</div>
      <div className={styles.copy}>© {new Date().getFullYear()}</div>
    </div>
  )
}

export default Footer;