import Head from 'next/head'

import { Homepage } from '../page-components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MAME'S PORTFOLIO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />

    </div>
  )
}
