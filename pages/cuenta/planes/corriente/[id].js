import styled from 'styled-components'
import Header from 'components/Header'
import Head from 'next/head'
import CheckLi from 'components/CheckLi'
import { useState, useEffect } from 'react'
import 'reactjs-popup/dist/index.css'
import { PlanIntereses, PlanTradicional } from 'components/PlanesPopup'
import { updatePlan } from '../../../../firebase/client'
import { useRouter } from 'next/router'
import useUser from 'hooks/useUser'

const Button = styled.button`
border: 1px solid #fff;
padding: 10px 15px;
background-color: #004481;
color: #fff;
font-size: 1em;
cursor: pointer;
transition: all .3s ease;
border-radius: 10px;
&:hover {
  opacity: .7;
}
`

const Container = styled.div`
width: 90%;
height: 86%;
display: flex;
justify-content: center;
align-items: center;
background-image: url('/saving1.jpg');
background-size: 100% 100%;
margin-top: 70px;
border-radius: 10px;
box-shadow:  -5px 5px 60px #bebebe44,
             5px -5px 60px #fff6;


@media (max-width: 739px) {
  margin-top: 100px;
  flex-direction: column;
}

@media (max-width: 560px) {
  background: none;
  margin-top: 160px;
}
@media (min-height: 844px) {
  margin-top: 190px;
}
.tradicional {
  margin: 0 10px;
  width: 50%;
  height: 70%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 739px) {
    margin: 10px 0;
    width: 100%;
  }
  & > p {
    font-size: .8em;
    letter-spacing: 1.2px;
  }
}
.intereses {
  margin: 0 10px;
  width: 50%;
  height: 70%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 739px) {
    margin: 10px 0;
    width: 100%;
  }
  & > p {
    font-size: .8em;
    letter-spacing: 1.2px;
  }
}
.saldo {
  font-size: 1.8em;
  font-weight: 600;
}
ul {
  list-style: none;
  font-size: .8em;
  margin: 0;
  padding: 0;
}
h2 {
  padding: 5px;
  width: 100%;
  height: 20%;
  background-color: #004481;
  color: #fff;
  margin: 0;
}
.buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 739px) {
    margin-top: 0;
  }
}
.processDone {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  h2 {
    margin-bottom: 10px;
    height: auto;
  }
}
`
export default function CheckPlan() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [plan, setPlan] = useState(null)
  const router = useRouter()

  const handlePopup = () => {
    setOpen(!open)
  }
  const handlePopup2 = () => {
    setOpen2(!open2)
  }

  const handleTradicional = e => {
    e.preventDefault()
    updatePlan({ id: router.query.id, plan: 'tradicional' }, 'checkAccounts')
      .then(() => setPlan('Felicidades! Su cuenta corriente con el plan de tradicional han sido creados correctamente, nuestro equipo se pondrá en contacto contigo!'))
      .catch(err => console.log('err updating plan', err))
  }
  const handleIntereses = e => {
    e.preventDefault()
    updatePlan({ id: router.query.id, plan: 'intereses' }, 'checkAccounts')
      .then(() => setPlan('Felicidades! Su cuenta corriente con intereses han sido creados correctamente, nuestro equipo se pondrá en contacto contigo!'))
      .catch(err => console.log('err updating plan', err))
  }

  const handleDone = e => {
    e.preventDefault()
    router.replace('/cuenta')
  }
  return(
    <>
      <Head><title>Planes cuenta corriente</title></Head>
      <Header />
      <Container>
        {
          plan && 
            <>
              <div className='processDone'>
                <h2>{plan}</h2>
                <Button onClick={handleDone}>Finalizar proceso</Button>
              </div>
            </>
        }
        {
          plan === null &&
            <>
        <div className='tradicional'>
          <h2>Plan cuenta corriente tradicional</h2>
          <p>Además de permitir realizar consignaciones y retiros a través de cheques y tarjeta debito, tienes la opción de obtener cupo de sobregiro</p>
          <ul className='ul'>
            <CheckLi>Solicita tu chequera ahora.</CheckLi>
            <CheckLi>Maneja tu dinero con cheques o tarjeta débito..</CheckLi>
            <CheckLi>Dispón de tu Tarjeta Débito BBVA y aprovecha todos sus servicios.</CheckLi>
            <CheckLi>Tasas de interés diferenciales en función de tu saldo.</CheckLi>
          </ul>
          <p>Si quieres saber más u obtener este plan:</p>
          <div className='buttons'>
            <Button onClick={handleTradicional}>Me interesa</Button>
            <Button onClick={handlePopup}>Ver beneficios</Button>
            <PlanTradicional open={open} handlePopup={handlePopup} />
          </div>
        </div>
        <div className='intereses'>
          <h2>Plan cuenta corriente con intereses</h2>
          <p>Además de tener cupo de sobregiro, te ofrece una rentabilidad mensual sobre tus ahorros</p>
          <ul className='ul'>
            <CheckLi>Obtén intereses desde <strong>$1.000.000</strong>.</CheckLi>
            <CheckLi>Ábrela con un monto desde <strong>$200.000</strong>.</CheckLi>
            <CheckLi>Tasas de interés diferenciales en función de tu saldo.</CheckLi>
            <CheckLi>Maneja tu dinero con cheques o tarjeta débito.</CheckLi>
          </ul>
          <p>Si quieres saber más u obtener este plan:</p>
          <div className='buttons'>
            <Button onClick={handleIntereses}>Me interesa</Button>
            <Button onClick={handlePopup2}>Ver beneficios</Button>
            <PlanIntereses open={open2} handlePopup={handlePopup2} />
          </div>
        </div>
            </>
        }
      </Container>
    </>
  )
}
