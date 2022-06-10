import styled from 'styled-components'
import useUser, { USER_STATES } from 'hooks/useUser'
import Spinner from 'components/Spinner'
import { useEffect } from 'react'
import Header from 'components/Header'

const Container = styled.div`
width: 90%;
height: 75%;
background-color: #fff;
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
              <div>hello {user.email}</div>
            </Container>
          </>
      }
    </>
  )
}
