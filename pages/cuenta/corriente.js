import styled from 'styled-components'
import Header from 'components/Header'
import ButtonAddAccount from 'components/buttons/ButtonAddAccount'
import Input from 'components/Input'
import Dropdown from 'components/Dropdown'
import ButtonCancel from 'components/buttons/ButtonCancel'
import DropdownCity from 'components/DropdownCity'
import Signature from 'components/Signature'
import Spinner from 'components/Spinner'
import Head from 'next/head'
import { useState, useRef } from 'react'
import useUser from 'hooks/useUser'
import { createCheckAccount, getCheckAccountData } from '../../firebase/client'
import { useRouter } from 'next/router'

const Container = styled.div`
width: 90%;
height: 88%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 10px;
background-image: url('/saving1.jpg');
background-size: 100% 100%;
box-shadow:  -5px 5px 60px #bebebe44,
             5px -5px 60px #fff6;
margin-top: 70px;
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
  font-size: 1.5em;
  letter-spacing: 5px;
  margin: 0;
  padding: 0;
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
  .inputFile {
    display: block;
    width: 100%;
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
    margin: 5px auto;
    text-align: center;
    label {
      display: block;
      width: 100%;
      color: #004481;
      margin-bottom: 10px;
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
    & > div {
      margin: 0 10px;
    }
    @media (max-width: 415px) {
      & > div {
        margin: 10px 8px;
      }
    }
  }
  
  .msg {
    position: absolute;
    bottom: 70px;
    display: block;
    text-align: center;
    color: red;
    margin-bottom: 2px;
    font-weight: 600;
  }
}
`
export default function Corriente() {
  const [ideValue, setIdeValue] = useState('default')
  const [city, setCity] = useState('default')
  const [msg, setMsg] = useState('')
  const [fileDocument, setFileDocument] = useState(null)
  const [fileBalance, setFileBalance] = useState(null)
  const [fileResults, setFileResults] = useState(null)
  const [fileRent, setFileRent] = useState(null)
  const [signature, setSignature] = useState(null)
  const [loading, setLoading] = useState(null)

  const fileRef = useRef({})
  const canvasRef = useRef({})
  const user = useUser()
  const router = useRouter()

  const clean = () => canvasRef.current.clear()

  const save = () => setSignature(canvasRef.current.getTrimmedCanvas().toDataURL("image/png"))

  const handleChangeDropdown = e => {
    setIdeValue(e.target.value)
  }

  const handleFileDocument = e => {
    e.preventDefault()
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileDocument(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleFileBalance = e => {
    e.preventDefault()
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileBalance(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleFileResults = e => {
    e.preventDefault()
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileResults(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleFileRent = e => {
    e.preventDefault()
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileRent(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleChangeCity = e => { setCity(e.target.value) }
  
  const handleSubmit = e => {
    e.preventDefault()
    if (city != 'default' && ideValue != 'default' && fileDocument, fileBalance, fileResults, fileRent) {
      if (fileDocument.includes('application/pdf') && fileBalance.includes('application/pdf') && fileResults.includes('application/pdf') && fileRent.includes('application/pdf')) {
        if (signature) {
          setMsg('')
          const dataForm = { ...Object.fromEntries(new FormData(e.target)), typeIde: ideValue, city, fileDocument, fileBalance, fileResults, fileRent, signature, uid: user.uid, type: 'corriente', plan: '' }
          createCheckAccount(dataForm)
            .then(() => {
              console.log(dataForm)
              setLoading(true)
              getCheckAccountData(user.uid)
                .then(resp => {
                  resp.docs.map(doc => {
                    if (doc.data().plan === '') {
                      router.replace(`/cuenta/planes/corriente/${doc.id}`)
                    }
                  })
                })
                .catch(err => console.log('Error getting data', err))
            })
            .catch(err => console.log('Error add', err))
        } else setMsg('Necesitamos tu firma!')
      } else setMsg('Todos los documentos deben ser PDF')
    } else setMsg('Todos los campos son obligatorios')
  }

  return(
    <>
      <Head><title>Nueva cuenta corriente</title></Head>
      <Header />
      <Container>
        {
          loading && <Spinner />
        }
        {
          loading === null &&
            <>
            <h2>Crea tu cuenta corriente</h2>
            <form onSubmit={handleSubmit}>
              <div className='containerInput'>
                <p style={{ textAlign: 'center', fontSize: '1em', margin: '2px 0' }}><strong>Lo primero que necesitamos son tus datos personales:</strong></p>
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

                <p style={{ color: '#004481', textAlign: 'center' }}><strong>Documento de identificación</strong></p>
                <div className='inputFile'>
                  <input type='file' ref={fileRef} onChange={handleFileDocument} accept='application/pdf'/>
                </div>
              </div>
              <div className='containerInput'>
                <p style={{ textAlign: 'center', fontSize: '1em', margin: '2px 0' }}><strong>También necesitamos información sobre tú empresa</strong></p>
                <Input size={'reduced'} type={"text"} name={"pymeName"}>Nombre de la empresa</Input> 
                <Input size={'reduced'} type={"text"} name={"nit"}>NIT</Input> 
                <div className='dropdown'>
                  <label><strong>Seleccione la ubicación de su empresa</strong></label>
                  <DropdownCity onChange={handleChangeCity} />
                </div>
                <p style={{ color: '#000', textAlign: 'center' }}><strong>Información financiera</strong></p>
                <p style={{ color: '#004481', textAlign: 'center', fontSize: '.9em' }}><strong>Balance general (activo, pasivo, patrimonio)</strong></p>
                <div className='inputFile'>
                  <input type='file' ref={fileRef} onChange={handleFileBalance} accept='application/pdf'/>
                </div>
                <p style={{ color: '#004481', textAlign: 'center', fontSize: '.9em'}}><strong>Estado de resultados</strong></p>
                <div className='inputFile'>
                  <input type='file' ref={fileRef} onChange={handleFileResults} accept='application/pdf'/>
                </div>
                <p style={{ color: '#004481', textAlign: 'center', fontSize: '.9em' }}><strong>Declaración de renta</strong></p>
                <div className='inputFile'>
                  <input type='file' ref={fileRef} onChange={handleFileRent} accept='application/pdf'/>
                </div>
                <p style={{ 'color': '#004481', 'textAlign': 'center', margin: '5px 0', fontSize: '.9em' }}><strong>Firmar documento</strong></p>
                <Signature save={save} canvasRef={canvasRef} clean={clean} />
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
            </>
        }
      </Container>
    </>
  )
}
