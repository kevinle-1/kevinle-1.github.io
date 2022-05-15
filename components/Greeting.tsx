import styles from '../styles/Greeting.module.scss'

const Greeting = () => {
    return(
        <div className={styles.greeting}>
            <div id="flag">🇮🇸</div>
            <div id="text">Halló</div>
        </div>
    )
}

export default Greeting