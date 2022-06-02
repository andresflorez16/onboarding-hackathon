import Image from 'next/image'
import Head from 'next/head'

export default function Session() {
  return(
    <>
      <Head><title>BBVA Onboarding Digital | Personas</title></Head>
      <div>
        <Image src={'/bbva.png'} width={300} height={100} />
      </div>
      <h1>Sesión</h1>
    </>
  )
}
