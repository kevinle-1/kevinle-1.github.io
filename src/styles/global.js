import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    
    #headline {
      #hidden {
          color: ${({ theme }) => theme.primary};
      }
    }

    .links {
      a {
        color: ${({ theme }) => theme.secondary};
      }

      a:hover {
        color: ${({ theme }) => theme.primary};
        background-color: ${({ theme }) => theme.secondary};
      }
    }

    .footer {
      #theme {
        color: ${({ theme }) => theme.primary};
        background-color: ${({ theme }) => theme.secondary};
        
        border: 1px solid ${({ theme }) => theme.secondary};
      }

      #theme:hover {
          color: ${({ theme }) => theme.secondary};
          background-color: ${({ theme }) => theme.primary};
      }
    }
  }
  
  ::selection {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.secondary};
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.secondary};
  }
  `;