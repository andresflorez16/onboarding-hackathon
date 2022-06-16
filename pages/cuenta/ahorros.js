import styled from 'styled-components'
import Header from 'components/Header'
import ButtonAddAccount from 'components/buttons/ButtonAddAccount'
import Input from 'components/Input'
import Dropdown from 'components/Dropdown'
import ButtonCancel from 'components/buttons/ButtonCancel'
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
  margin: 0;
  text-align: center;
}

form {
  background-color: #ffffffcf;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-template-rows: none;
  width: 90%;
  padding-bottom: 1px;
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
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    grid-column: 1 / span 2;
    flex-wrap: wrap;
    div {
      margin: 0 10px;
    }
    @media (max-width: 415px) {
      div {
        margin: 10px 0;
      }
    }
  }
  .msg {
    display: block;
    width: 100%;
    text-align: center;
    color: red;
    margin-bottom: 2px;
    font-weight: 600;
  }
}
`

export default function Savings() {
  const [ideValue, setIdeValue] = useState('default')
  const [city, setCity] = useState('default')
  const [msg, setMsg] = useState('')

  const handleChangeDropdown = e => {
    setIdeValue(e.target.value)
  }

  const handleChangeCity = e => { setCity(e.target.value) }

  const handleSubmit = e => {
    e.preventDefault()
    if (city != 'default' && ideValue != 'default') {
      setMsg('')
      const data = { ...Object.fromEntries(new FormData(e.target)), typeIde: ideValue, city }
    } else setMsg('Todos los campos son obligatorios')
  }

  return(
    <>
      <Head><title>Nueva cuenta de ahorros</title></Head>
      <Header />
      <Container>
        <h2>Crea tu cuenta de ahorros</h2>
        <form onSubmit={handleSubmit}>
          <div className='containerInput'>
            <p><strong>Lo primero que necesitamos son tus datos personales:</strong></p>
            <Input size={'reduced'} type={"text"} name={"name"}>Nombre</Input> 
            <Input size={'reduced'} type={"text"} name={"lastname"}>Apellido</Input> 
            <Input size={'reduced'} type={"text"} name={"phone"} numbers={true}>Celular</Input> 
            <Input size={'reduced'} type={"email"} name={"email"}>Correo Electrónico</Input> 
            <div className='dropdown'>
              <label><strong>Seleccione su tipo de documento</strong></label>
              <Dropdown onChange={handleChangeDropdown} />
            </div>
            {
              ideValue != 'default'
                ?
                  <Input size={'reduced'} type={"text"} name={"identification"} numbers={true}>Número de identificación</Input> 
                : null
            }
          </div>
          <div className='containerInput'>
            <p><strong>También necesitamos información sobre tú empresa</strong></p>
            <Input size={'reduced'} type={"text"} name={"pymeName"}>Nombre de la empresa</Input> 
            <Input size={'reduced'} type={"text"} name={"nit"}>NIT</Input> 
            <div className='dropdown'>
              <label><strong>Seleccione la ubicación de su empresa</strong></label>
              <DropdownCity onChange={handleChangeCity} />
            </div>

            <p style={{ 'color': '#004481' }}><strong>Firmar documento</strong></p>
          </div>
          <div className='containerButton'>
            {
              msg ? <span className='msg'>{msg}</span> : null
            }
            <div>
              <ButtonCancel>Cancelar</ButtonCancel>
            </div>
            <div>
              <ButtonAddAccount>Crear cuenta</ButtonAddAccount>
            </div>
          </div>
        </form>
      </Container>
    </>
  )
}
