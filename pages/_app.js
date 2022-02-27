import '../styles/import.scss'

import '../styles/globals.css'

import Head from 'next/head'
import Script from 'next/script'
import "../styles/font-awesome/css/all.min.css"
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
  
}

export default MyApp
