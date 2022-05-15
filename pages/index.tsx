import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'

import Tao from '../img/tao.svg'

import Header from '../components/Header'
import Greeting from '../components/Greeting'

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Header/>
      <Greeting/>

      <div className={styles.tao}>
        <Tao/>
      </div>

      {/* <Link href="/page">
        etc
      </Link> */}
    </div>
  )
}

export default Home
