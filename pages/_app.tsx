import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </>
  
)

export default MyApp
