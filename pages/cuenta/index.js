import styled from 'styled-components'
import useUser, { USER_STATES } from 'hooks/useUser'
import Spinner from 'components/Spinner'
import Accounts from 'components/Accounts'
import { useEffect } from 'react'
import Header from 'components/Header'

const Container = styled.div`
width: 50%;
height: 75%;
background: #D3CCE3;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #E9E4F0, #D3CCE3);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #E9E4F0, #D3CCE3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
  color: #004481;
  @media (max-height: 569px) {
    font-size: 1.1em;
  }
}
p {
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
              <p>Aquí podrás digilenciar los pasos para adquirir una cuenta de ahorros o corriente, de forma digital!</p>
              <p><strong>Elige el tipo de cuenta que necesitas:</strong></p>
              <Accounts />
            </Container>
          </>
      }
    </>
  )
}
