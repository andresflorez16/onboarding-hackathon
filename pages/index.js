import Head from 'next/head'
import Header from 'components/Header'
import Content from 'components/Content'
import { useRouter } from 'next/router'

export default function Home() {

  return (
    <>
      <Head>
        <title>BBVA Onboarding Digital | Inicio</title>
      </Head>
      <Header />
      <Content />
    </>
  )
}

