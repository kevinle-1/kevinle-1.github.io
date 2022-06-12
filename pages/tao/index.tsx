import type { NextPage } from 'next'

import styles from '../../styles/tao/Tao.module.scss'

import Tao from '../../assets/img/tao.svg'

import Header from '../../components/tao/Header'
import Greeting from '../../components/tao/Greeting'

const TaoPage: NextPage = () => {
  return (
    <div className={styles.home}>
      <Header/>
      <Greeting/>
      <div id="tao" className={styles.tao}>
        <Tao/>
      </div>
    </div>
  )
}

export default TaoPage
