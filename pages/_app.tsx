import '../styles/globals.scss'
import '../styles/themes.scss'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Html } from 'next/document'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="off">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
