import Head from 'next/head'
import Header from 'components/Header'
import Content from 'components/Content'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

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

