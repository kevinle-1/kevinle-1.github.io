import { createGlobalStyle } from 'styled-components';

export const BaseStyle = createGlobalStyle`
    body {
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.background};

        transition: background 0.2s;
    }

    .accent {
        color: ${({ theme }) => theme.accent};
    }

    a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
    }

    a:hover  {
        color: ${({ theme }) => theme.background};
        background: ${({ theme }) => theme.accent};
    }

    ::selection {
        color: ${({ theme }) => theme.background};
        background: ${({ theme }) => theme.accent};
    }

    .switch:hover {
        color: ${({ theme }) => theme.background};
        background: ${({ theme }) => theme.accent};
    }
`;