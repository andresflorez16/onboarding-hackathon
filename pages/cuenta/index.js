import styled from 'styled-components'
import useUser, { USER_STATES } from 'hooks/useUser'
import Spinner from 'components/Spinner'
import Accounts from 'components/Accounts'
import { useEffect } from 'react'
import Header from 'components/Header'
import Head from 'next/head'

const Container = styled.div`
width: 50%;
height: 75%;
background-image: url('/saving1.jpg');
background-size: 100% 100%;
/*background: #D3CCE3;  [> fallback for old browsers <]*/
/*b<]ackground: linear-gradient(to right, #E9E4F0, #D3CCE3); [> W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
padding: 10px;
border-radius: 10px;
box-shadow:  -5px 5px 60px #bebebe44,
             5px -5px 60px #fff6;
@media (max-width: 900px) {
  width: 70%;
}
@media (max-width: 830px) {
  width: 90%;
}
@media (max-width: 560px) {
  margin-top: 100px;
}
@media (max-height: 569px) {
  margin-top: 80px;
}
h2 {
  color: #fff;
  @media (max-height: 569px) {
    font-size: 1.1em;
  }
}
p {
  color: #fff;
 @media (max-height: 569px) {
  font-size: .9em;
 }
}
.myAccounts {
  position: absolute;
  width: 50%;
}
`

export default function Account() {
  const user = useUser()

  useEffect(() => {
    user
  }, [user])

  return(
    <>
      <Head><title>BBVA Onboarding Digital | Cuenta</title></Head>
      {
        user === USER_STATES.NOT_KNOWN && 
          <>
            <Header />
            <Spinner />
          </>
      }
      {
        user &&
          <>
            <Header />
            <Container>
              <h2>Bienvenido {user.displayName}</h2>
              <p>Aquí podrás digilenciar los pasos para adquirir una <strong>cuenta de ahorros</strong> o <strong>corriente</strong>, de forma digital!</p>
              <p><strong>Elige el tipo de cuenta que necesitas:</strong></p>
              <Accounts />
            </Container>
          </>
      }
    </>
  )
}
