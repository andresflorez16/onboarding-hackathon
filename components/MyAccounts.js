import styled from 'styled-components'
import { getSavingAccountData, getCheckAccountData } from '../firebase/client'
import useUser from 'hooks/useUser'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Container = styled.div`
margin: auto;
width: 100%;
.card {
  width: 70%;
  background-color: #bbb;
  border-radius: 10px;
  padding: 5px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  p {
    color: #004481;
  }
}
h2 {
  margin-top: 50px;
}
`

export default function MyAccounts() {
  const [accountsPending, setAccountsPending] = useState([])
  const user = useUser()

  useEffect(() => {
    user && getSavingAccountData(user.uid)
    .then(resp => {
      resp.docs.map(doc => {
        if (doc.data().plan === '') {
          setAccountsPending(pending => [...pending, { ...doc.data(), id: doc.id }])
        }
      })
    })
    .catch(err => console.log('err getting data', err))
  }, [user])

  useEffect(() => {
    user && getCheckAccountData(user.uid)
    .then(resp => {
      resp.docs.map(doc => {
        if (doc.data().plan === '') {
          setAccountsPending(pending => [...pending, { ...doc.data(), id: doc.id }])
        }
      })
    })
    .catch(err => console.log('err getting data', err))
  }, [user])
  
  return(
    <Container>
      {
        accountsPending.length && 
          <>
            <h2>Procesos incompletos:</h2>
            {
              accountsPending.map((pending, index) => (
                <div className='card' key={index}>
                <p><strong>Tipo de cuenta: </strong>{pending.type}</p>
                <p><strong>Titular de la cuenta: </strong>{pending.name}</p>
                <p><strong>Identificación: </strong>{pending.identification}</p>
                {
                  pending.type === 'ahorros'
                    ?
                    <Link href={`/cuenta/planes/ahorros/${pending.id}`}>
                      <p>Para continuar tu proceso has <strong style={{ textDecoration: 'underline', cursor: 'pointer' }}>click aquí</strong></p>
                    </Link>
                    :
                    <Link href={`/cuenta/planes/corriente/${pending.id}`}>
                      <p>Para continuar tu proceso has <strong style={{ textDecoration: 'underline', cursor: 'pointer' }}>click aquí</strong></p>
                    </Link>
                }
                </div>
              ))
            }
          </>
      }
    </Container>
  )
}
