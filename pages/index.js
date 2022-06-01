import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  router.replace('/personas')

  return (
    <>
      <Head>
        <title>BBVA Onboarding Digital | Inicio</title>
      </Head>
    </>
  )
}

