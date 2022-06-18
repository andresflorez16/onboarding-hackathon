import styled from 'styled-components'
import Header from 'components/Header'
import Head from 'next/head'
import CheckLi from 'components/CheckLi'
import { useState } from 'react'
import 'reactjs-popup/dist/index.css'
import { PlanNomina, PlanAhorros } from 'components/PlanPopupSaving'
import { updatePlan } from '../../../../firebase/client'
import { useRouter } from 'next/router'

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
.nomina {
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
.ahorro {
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
`
export default function SavingPlan() {
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

  const handleNomina = e => {
    e.preventDefault()
    updatePlan({ id: router.query.id, plan: 'nomina' })
      .then(() => setPlan('Felicidades! Su cuenta de ahorros con el plan de nómina han sido creados correctamente, nuestro equipo se pondrá en contacto contigo!'))
      .catch(err => console.log('err updating plan', err))
  }
  const handleAhorro = e => {
    e.preventDefault()
    updatePlan({ id: router.query.id, plan: 'ahorro' })
      .then(() => console.log('updated'))
      .catch(err => console.log('err updating plan', err))
  }

  const handleDone = e => {
    e.preventDefault()
    router.replace('/cuenta')
  }
  return(
    <>
      <Head><title>Planes cuenta ahorros</title></Head>
      <Header />
      <Container>
        {
          plan && 
            <>
              <div style={{width: '100%', padding: '0 5px'}}>
                <h2>{plan}</h2>
                <br />
                <Button onClick={handleDone}>Finalizar proceso</Button>
              </div>
            </>
        }
        {
          plan === null &&
            <>
        <div className='nomina'>
          <h2>Plan de nómina</h2>
          <p>Cuota de manejo sin importar tu saldo <span className='saldo'>$0</span></p>
          <ul className='ul'>
            <CheckLi>Podrías tener adelanto de nómina sin trámites ni papeleos.</CheckLi>
            <CheckLi>Pagos de servicios y productos.</CheckLi>
            <CheckLi>No es necesario que tu empresa tenga convenio con BBVA.</CheckLi>
          </ul>
          <p>Si quieres saber más u obtener este plan:</p>
          <div className='buttons'>
            <Button onClick={handleNomina}>Me interesa</Button>
            <Button onClick={handlePopup}>Ver beneficios</Button>
            <PlanNomina open={open} handlePopup={handlePopup} />
          </div>
        </div>
        <div className='ahorro'>
          <h2>Plan de ahorro</h2>
          <p>Cuota de manejo con saldo medio a <strong>$1 millón</strong> en el mes anterior <span className='saldo'>$0</span></p>
          <ul className='ul'>
            <CheckLi>Disponibilidad inmediata del dinero ahorrado.</CheckLi>
            <CheckLi>A mayor saldo recibes mayor tasa de interés.</CheckLi>
            <CheckLi>Cuenta con el seguro de depósitos Fogafín.</CheckLi>
          </ul>
          <p>Si quieres saber más u obtener este plan:</p>
          <div className='buttons'>
            <Button onClick={handleAhorro}>Me interesa</Button>
            <Button onClick={handlePopup2}>Ver beneficios</Button>
            <PlanAhorros open={open2} handlePopup={handlePopup2} />
          </div>
        </div>
            </>
        }
      </Container>
    </>
  )
}
