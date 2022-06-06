import styled, { keyframes } from 'styled-components'
import Input from 'components/Input'
import ButtonSessions from 'components/buttons/ButtonMethods'
import Link from 'next/link'

const inputHighlighter = keyframes`
from {
  background: #5264AE;
 }

 to {
  width: 0;
  background: transparent;
 }
`

const ContainerDiv = styled.div`
width: 70%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
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
div {
  margin: 50px 0;
  position: relative;
  display: grid;
  place-items: center;
  .input {
   font-size: 1.5em;
   padding: 10px 10px 10px 5px;
   display: inline-block;
   width: 70%;
   border: none;
   border-bottom: 1px solid #515151;
   background: transparent;
   font-family: Helvetica;
   margin-top: 20px;
  @media (max-width: 880px) {
    width: 80%;
  }
  @media (max-width: 590px) {
    font-size: 1.3em;
  }
  @media (max-width: 590px) {
    width: 90%;
    font-size: 1.2em;
  }
  @media (max-width: 400px) {
    font-size: 1em;
  }
  }
  .input:focus {
   outline: none;
  }

  label {
   font-family: Helvetica;
   color: #999;
   font-size: 1em;
   font-weight: normal;
   position: absolute;
   pointer-events: none;
   transition: 0.2s ease all;
   -moz-transition: 0.2s ease all;
   -webkit-transition: 0.2s ease all;
  }

  .input ~ label, .input:valid ~ label {
   top: -20px;
   font-size: 2em;
   color: #5264AE;
  @media (max-width: 370px) {
    font-size: 1.5em;
  }
  }

  .bar {
   position: relative;
   display: block;
   width: 200px;
  }

  .bar:before, .bar:after {
   content: '';
   height: 2px;
   width: 0;
   bottom: 1px;
   position: absolute;
   background: #5264AE;
   transition: 0.2s ease all;
   -moz-transition: 0.2s ease all;
   -webkit-transition: 0.2s ease all;
  }

  .bar:before {
   left: 50%;
  }

  .bar:after {
   right: 50%;
  }

  .input:focus ~ .bar:before, .input:focus ~ .bar:after {
   width: 50%;
  }

  .highlight {
   position: absolute;
   height: 60%;
   width: 100px;
   top: 25%;
   left: 50%;
   pointer-events: none;
   opacity: 0.5;
  }

  .input:focus ~ .highlight {
   animation: ${inputHighlighter} 0.3s ease;
  }
}

`

export default function FormSession(props) {
  return(
    <ContainerDiv>
      <form>
        <div>
          <Input type={"email"}>Correo electrónico</Input>
        </div>
        <div>
          <Input type={"password"}>Contraseña</Input>
        </div>
        <div>
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
    </ContainerDiv>
  )
}
