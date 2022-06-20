import styled from 'styled-components'
import useUser, { USER_STATES } from 'hooks/useUser'
import Spinner from 'components/Spinner'
import Accounts from 'components/Accounts'
import MyAccounts from 'components/MyAccounts'
import { useEffect } from 'react'
import Header from 'components/Header'
import Head from 'next/head'

const Container = styled.div`
width: 60%;
background-image: url('/saving1.jpg');
background-size: 100% 100%;
padding: 10px;
border-radius: 10px;
margin-top: 70px;
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
@media (max-width: 400px) {
  margin-top: 130px;
}
h2 {
  color: #fff;
  @media (max-height: 569px) {
    font-size: 1.1em;
  }
}
.info {
  width: 100%;
  background-color: #004481;
  padding: 10px;
  @media (max-height: 569px) {
    font-size: .9em;
  }
}
p {
  color: #fff;
 @media (max-height: 569px) {
  font-size: .9em;
 }
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
              <MyAccounts />
              <p className='info'>Aquí podrás digilenciar los pasos para adquirir una <strong>cuenta de ahorros</strong> o <strong>corriente</strong>, de forma digital!</p>
              <p className='info'><strong>Elige el tipo de cuenta que necesitas:</strong></p>
              <Accounts />
            </Container>
          </>
      }
    </>
  )
}
