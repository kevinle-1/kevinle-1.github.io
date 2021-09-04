import '../styles/main.scss';

import React, { useState, useEffect } from 'react';

import wordmark from '../assets/wordmark.svg';
import leaves from '../assets/leaves.png';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';

import FadeIn from 'react-fade-in';

function App() {
  const defaultHeadline = "SOFTWARE ENGINEER";

  useEffect(() => {
    const localTheme = window.localStorage.getItem('dark');
    localTheme === "false" ? toggleTheme(true) : toggleTheme(false);
  }, []);

  function randomEmojis() {
    var emojis = ["👨🏼‍💻","⚽","🎮","💻","💽","🎬","💻","📚","🍕",
                  "🥓","🥐","🥞","💻","🍔","🍟","🍗","🥙","🥗",
                  "🌮","🌯","🍱","🥡","🍣","🍜","🍛","🍜","🍜",
                  "🍚","🍙","🍘","🍥","🥮","🍢","🥘","🍲","🍝",
                  "🥣","🥧","🍦","🍧","🍨","🍩","🍪","🎂","🍰",
                  "🧁","🍫","🍭","🍡","🍮","☕","🍺","🍇","🌶",
                  "🌏","🌈","👨🏼‍💻","👨🏼‍💻","👨🏼‍💻","👨🏼‍💻","👨🏼‍💻","👨🏼‍💻","👨🏼‍💻"]

    var emojiHeadline = ""

    for(var i=0; i < 9; i++){
      emojiHeadline += emojis[Math.floor(Math.random() * emojis.length)]
    }

    setHeadline(emojiHeadline);
  }

  function toggleTheme(darkTheme) {
    if (darkTheme) {
      setDark(false);
      setTheme("1");

      window.localStorage.setItem('dark', false);
    } else {
      setDark(true);
      setTheme("0");

      window.localStorage.setItem('dark', true);
    }
  }

  const [headline, setHeadline] = useState(defaultHeadline);

  const [theme, setTheme] = useState("1");
  const [dark, setDark] = useState(false);

  return (
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="main">
          <FadeIn>
            <div className="content">
              <img id="wordmark" alt="Kevin Le" className={dark ? "invert" : null} src={wordmark}/>

              <p id="headline" 
                onMouseOver={_ => randomEmojis()} 
                onMouseLeave={_ => setHeadline(defaultHeadline)}
              >
                {headline}<span id="hidden"> hi</span>
              </p>

              <div className="links">
                <ul>
                  <li><a target="_blank" rel="noreferrer" href="mailto:contact@kevinle.com.au">EMAIL</a></li>
                  <li><a target="_blank" rel="noreferrer" href="https://twitter.com/kevinle_1">TWITTER</a></li>
                  <li><a target="_blank" rel="noreferrer" href="https://github.com/kevinle-1">GITHUB</a></li>
                  <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kevinle14">LINKEDIN</a></li>
                  <br/>
                  <li><a target="_blank" rel="noreferrer" href="https://kevinle.com.au/files/kevin-le-resume-pub2021b.pdf">RÉSUMÉ</a></li>
                </ul>
              </div>
              </div>
            </FadeIn>
            
            <div className="footer">
              <button id="theme" onClick={() => toggleTheme(dark)}>{theme}</button>
              <p id="copyright">© {new Date().getFullYear()}</p>
            </div>

          <div className="leaves">
            <img src={leaves} alt="Leaves"/>
          </div>
        </div>
      </ThemeProvider>
  );
}

export default App;
