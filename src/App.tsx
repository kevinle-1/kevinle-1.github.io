import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { BaseStyle } from './assets/styles/themes/base';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './assets/styles/app.scss';

import Home from './pages/Home';
import Blog from './pages/Blog';

import Logo from './assets/img/k.svg?component';

import { themes } from './assets/styles/themes/themes';

function App() {
  const [themeIdx, setThemeIdx] = useState(0);
  const [theme, setTheme] = useState(themes[0])

  function nextTheme() {
    let nextTheme = themeIdx + 1;

    if (nextTheme < themes.length) {
      setTheme(themes[nextTheme]);
      setThemeIdx(nextTheme);
    }
    else {
      setTheme(themes[0])
      setThemeIdx(0);
    }
  }

  return (
    <div className="app">

      <ThemeProvider theme={theme.theme}>
        <BaseStyle />
        <Router>
          <Link to="/">
            <div className="logo accent">
              <Logo/>
            </div>
          </Link>

          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/blog" element={<Blog/>}/>
            </Routes>
          </div>
        </Router>

        <div className="footer">
          <div className="switch accent" onClick={_ => nextTheme()}>{theme.name}</div>
          <div className="copy">© {new Date().getFullYear()}</div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App
