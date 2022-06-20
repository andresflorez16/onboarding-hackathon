import styled, { keyframes } from 'styled-components'
import Input from 'components/Input'
import ButtonSessions from 'components/buttons/ButtonMethods'
import Link from 'next/link'
import Methods from 'components/MethodsPopups'
import Spinner from 'components/Spinner'
import { useState, useEffect, useRef } from 'react'
import { loginEmailPassword, addUser } from '../firebase/client'
import { errorsAuth } from '../firebase/errors'
import useUser, { USER_STATES } from 'hooks/useUser'
import { useRouter } from 'next/router'

const ContainerDiv = styled.div`
width: 70%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (max-width: 1000px) {
  width: 90%;
}
@media (max-width: 880px) {
  .input {
    width: 90%;
  }
}
.spanMethod {
  strong {
    cursor: pointer;
    text-decoration: underline;
  }
  margin-top: 10px;
  @media (max-width: 400px) {
    font-size: .9em;
  }
}
form {
  width: 100%;
  height: 100%;
}
.buttonDiv {
  display: grid;
  place-items: center;
  margin: 10px 0;
}

.msg {
  display: block;
  color: red;
  text-align: center;
  margin: 0;
  padding: 0;
}

`

export default function FormSession(props) {
  const [msg, setMsg] = useState('')

  const form = useRef(null)

  const user = useUser()

  const router = useRouter()

  useEffect(() => {
    user && router.push('/cuenta')
  }, [user])

  const handleSubmit = e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    data.email && data.password
      ? props.method === 'signin' 
        ? addUser(data)
          .then(cred => console.log(cred))
          .catch(err => setMsg(errorsAuth(err.code)))
        : loginEmailPassword(data)
          .then(cred => console.log(cred))
          .catch(err => setMsg(errorsAuth(err.code)))
      : setMsg('Los campos son obligatorios')
  }

  const handleChange = e => {
    e.preventDefault()
    e.target.value && setMsg('')
  }

  return(
    <ContainerDiv>
      {
        user === USER_STATES.NOT_KNOWN && <Spinner />
      }
      {
        user === USER_STATES.NOT_LOGGED &&
          <>
            <form ref={form} onSubmit={handleSubmit}>
              <Input type={"email"} name={'email'} onChange={handleChange}>Correo electrónico</Input>
              <Input type={"password"} name={'password'} onChange={handleChange}>Contraseña</Input>
              {
                msg
                  ? <span className='msg'><strong>{msg}</strong></span>
                  : null
              }
              <div className="buttonDiv">
                <ButtonSessions type='submit'>
                  {
                    props.method === 'login'
                      ? 'Iniciar sesión'
                      : 'Regístrate'
                  }
                </ButtonSessions>
                {
                  props.method === 'login'
                    ? <span className='spanMethod'>Aún no tienes una cuenta, <Link href={'/personas/signin'} className=""><strong>Crea una aquí</strong></Link></span>
                    : <span className='spanMethod'>Ya tienes una cuenta, <Link href={'/personas/login'} className=""><strong>Entra aquí</strong></Link></span>
                }
              </div>
          </form>
          <Methods />
        </>
      }
    </ContainerDiv>
  )
}
