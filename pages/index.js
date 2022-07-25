import Head from 'next/head'

import { Homepage } from '../page-components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MAME PORTFOLIO</title>
        <meta name="description" content="Portfolio page for Omomame Imafidon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />

    </div>
  )
}
