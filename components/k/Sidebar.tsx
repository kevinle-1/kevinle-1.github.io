import styles from '../../styles/k/Sidebar.module.scss';

import LightOn from '../../assets/img/lighton.svg'
import LightOff from '../../assets/img/lightoff.svg'
import Rewind from '../../assets/img/rewind.svg'
import Translate from '../../assets/img/translate.svg'
import K from '../../assets/img/k.svg'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router';

interface SidebarOptions {
  sidebarOnly: boolean,
  mobileShowIcons: boolean
}

const Sidebar = (props: SidebarOptions) => {
  const { theme, setTheme } = useTheme()
  const { asPath } = useRouter()

  function cycleTheme() {
    theme === 'light' || theme === undefined ?
      setTheme('dark') :
      setTheme('light')
  }

  function translate() {
    var lang = navigator.language;
    lang = lang.split("-")[0]; // Try get user preferred language ISO 639-1 code

    // Direct current page to Google translate page
    var path = "https://kevle-xyz.translate.goog" + asPath + "?_x_tr_sl=en&_x_tr_tl=" + lang
    window.open(path, '_blank')!.focus();
  }

  return <div className={styles.sidebar} style={(props.sidebarOnly ? {} : {width: "3em"})}>
      <div className={(props.mobileShowIcons ? "" : "hideMobile") + " icons"}>
        <span id="light" onClick={_ => cycleTheme()}>
          {theme === 'light' || theme === undefined ? <LightOn/> : <LightOff/>}
        </span>
        <span id="rewind">
          <Link href="/95" passHref={true}>
            <Rewind/>
          </Link>
        </span>
        <span id="translate" onClick={_ => translate()}>
          <Translate/>
        </span>
      </div>
      { props.sidebarOnly ? <div className="k"><K/></div> : null }
      { props.sidebarOnly ? <div className="copy">&copy; {new Date().getFullYear()}</div> : null }
  </div>
};

export default Sidebar