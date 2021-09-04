import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    transition: all 0.1s linear;

    margin: 0;

    font-family: 'Source Code Pro', monospace;
    font-size: 10pt;
    letter-spacing: 0.2em;
  }`