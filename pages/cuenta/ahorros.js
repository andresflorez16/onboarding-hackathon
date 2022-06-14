import styled from 'styled-components'
import Header from 'components/Header'
import ButtonAddAccount from 'components/buttons/ButtonAddAccount'
import Input from 'components/Input'
import Dropdown from 'components/Dropdown'
import DropdownCity from 'components/DropdownCity'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

const Container = styled.div`
width: 90%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 10px;
//background: #D3CCE3;
//background: linear-gradient(to right, #E9E4F0, #D3CCE3);
background-image: url('/saving1.jpg');
background-size: 100% 100%;
box-shadow:  -5px 5px 60px #bebebe44,
             5px -5px 60px #fff6;
margin-top: 20px;
@media (max-width: 710px) {
  margin-top: 90px;
  height: auto;
  padding-bottom: 10px;
}
@media (max-width: 560px) {
  margin-top: 130px;
  width: 98%;
  padding: 0 10px;
  padding-bottom: 10px;
  @media (max-height: 640px) {
    margin-top: 120px;
  }
  @media (max-height: 736px) {
    margin-top: 140px;
  }
  @media (max-height: 812px) {
    margin-top: 150px;
  }
}
h2 {
  color: #fff;
  font-size: 2em;
  letter-spacing: 5px;
}

form {
  background-color: #ffffffcf;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-template-rows: none;
  width: 90%;
  padding-bottom: 10px;
  p {
    text-align: center;
  }
  @media (max-width: 710px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 90%;
    p {
      text-align: left;
    }
  }
  button {
    margin: 0 auto;
  }
  .dropdown {
    width: 100%;
    margin: 10px auto;
    text-align: center;
    label {
      display: block;
      width: 100%;
      color: #004481;
      margin-bottom: 20px;
    }
  }
  .containerButton {
    grid-column: 1 / span 2;
  }
}
`

export default function Savings() {
  const [ideValue, setIdeValue] = useState('default')
  const [isNumber, setIsNumber] = useState(null)

  const handleChangeDropdown = e => {
    setIdeValue(e.target.value)
  }

  const handleChangeNumbers = e => {
    if(e.target.value.length > 0) RegExp('[0-9]').test(e.target.value) ? setIsNumber(true) : setIsNumber(false)
    else setIsNumber(null)
  }
  return(
    <>
      <Head><title>Nueva cuenta de ahorros</title></Head>
      <Header />
      <Container>
        <h2>Crea tu cuenta de ahorros</h2>
        <form>
          <div className='containerInput'>
            <p><strong>Lo primero que necesitamos son tus datos personales:</strong></p>
            <Input size={'reduced'} type={"text"} name={"name"}>Nombre</Input> 
            <Input size={'reduced'} type={"text"} name={"lastname"}>Apellido</Input> 
            <Input size={'reduced'} type={"text"} name={"phone"} onChange={handleChangeNumbers}>Celular</Input> 
            {
              isNumber === false && <span>Digíte solo números</span>
            }
            <Input size={'reduced'} type={"email"} name={"email"}>Correo Electrónico</Input> 
            <div className='dropdown'>
              <label>Seleccione su tipo de documento</label>
              <Dropdown onChange={handleChangeDropdown} />
            </div>
            {
              ideValue != 'default'
                ?
                <Input size={'reduced'} type={"text"} name={"identification"}>Número de identificación</Input> 
                : null
            }
          </div>
          <div className='containerInput'>
            <p><strong>También necesitamos información sobre tú empresa</strong></p>
            <Input size={'reduced'} type={"text"} name={"pymeName"}>Nombre de la empresa</Input> 
            <Input size={'reduced'} type={"text"} name={"nit"}>NIT</Input> 
            <div className='dropdown'>
              <label>Seleccione la ubicación de su empresa</label>
              <DropdownCity />
            </div>
          </div>
          <div className='containerButton'>
            <ButtonAddAccount>Crear cuenta</ButtonAddAccount>
          </div>
        </form>
      </Container>
    </>
  )
}
