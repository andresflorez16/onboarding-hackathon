import '../styles/globals.css'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout><Component {...pageProps} /></Layout>
      <section>Hola</section>
    </>
  )
}

export default MyApp
