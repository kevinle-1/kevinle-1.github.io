import '../styles/main.scss';

import React, { useState } from 'react';

import wordmark from '../assets/wordmark.svg';
import leaves from '../assets/leaves.png';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';

function coolEmojis() {
  return ""; 
}

function App() {

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const [theme, setTheme] = useState('light');

  return (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <div className="main">
       <div className="content">
        <img id="wordmark" src={wordmark}/>
        <p id="headline">SOFTWARE ENGINEER<span id="hidden"> hi :]</span></p>

        <div className="links">
          <ul>
            <li><a href="#">EMAIL</a></li>
            <li><a href="#">TWITTER</a></li>
            <li><a href="#">GITHUB</a></li>
            <li><a href="#">LINKEDIN</a></li>
            <br/>
            <li><a href="#">RÉSUMÉ</a></li>
          </ul>
        </div>

        <div className="footer">
          <button id="theme" onClick={toggleTheme} >1</button>
          <p id="copyright">© {new Date().getFullYear()}</p>
        </div>
       </div>

      <div className="leaves">
        <img src={leaves}/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
