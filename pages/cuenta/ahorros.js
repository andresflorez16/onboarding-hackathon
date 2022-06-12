import styled from 'styled-components'
import Header from 'components/Header'
import Select from 'components/Select'
import ButtonAddAccount from 'components/buttons/ButtonAddAccount'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Input from 'components/Input'

const Container = styled.div`
width: 90%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 10px;
background: #D3CCE3;
background: linear-gradient(to right, #E9E4F0, #D3CCE3);
box-shadow:  -5px 5px 60px #bebebe44,
             5px -5px 60px #fff6;
margin-top: 20px;
h2 {
  color: #004481;
}

form {
  width: 100%;
  height: 80%;
  button {
    margin: 0 auto;
  }
}
`

export default function Savings() {
  return(
    <>
      <Head><title>Nueva cuenta de ahorros</title></Head>
      <Header />
      <Container>
        <h2>Crea tu cuenta de ahorros</h2>
        <form>
          <Input size={'reduced'} type={"text"} name={"name"}>Nombre</Input> 
          <Input size={'reduced'} type={"text"} name={"lastname"}>Apellido</Input> 
          <Input size={'reduced'} type={"text"} name={"phone"}>Celular</Input> 
          <Input size={'reduced'} type={"email"} name={"email"}>Correo Electrónico</Input> 
          <Input size={'reduced'} type={"text"} name={"identification"}>Cédula</Input> 
          <ButtonAddAccount>Siguiente</ButtonAddAccount>
        </form>
      </Container>
    </>
  )
}
