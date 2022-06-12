import styles from '../../styles/tao/Greeting.module.scss'
import greetings from '../data/hello.json'

import FadeIn from 'react-fade-in'

import { useEffect, useState } from 'react'
import ReactCountryFlag from "react-country-flag"

interface Country {
    country: string;
    language?: string;
    name?: string;
    text?: string;
}

const Greeting = () => {
    const [randomCountry, setRandomCountry] = useState<Country>({
        "country": "error"
    })

    useEffect(() => {
        setRandomCountry(greetings[Math.floor(Math.random() * greetings.length)]);
    }, []);

    return(
        <div className={styles.greeting}>
            <FadeIn delay={140}>
                <div id="flag">
                    <ReactCountryFlag
                        className="emojiFlag"
                        svg
                        countryCode={randomCountry.country}
                        style={{
                            width: '1em',
                            height: '1em',
                        }}
                    />
                </div>
                <div id="text">{randomCountry.text}</div>
                <div id="language">Hello in <span>{randomCountry.name}</span></div>
            </FadeIn>

        </div>
    )
}

export default Greeting