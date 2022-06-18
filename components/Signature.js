import { useRef } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ButtonSignature from 'components/buttons/ButtonSignature'
import { useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import styled from 'styled-components'

const StyledPopup = styled(Popup)`
&-content {
  width: 50%;
  @media (max-width: 400px) {
    width: 80%;
  }
}
`

const Button = styled.button`
background-color: ${props => props.background};
margin: 0 5px;
color: #fff;
border-radius: 10px;
padding: 5px 10px;
cursor: pointer;
border: none;
transition: opacity .3s ease;
&:hover {
  opacity: .6;
}
`

export default function Signature({ clean, save, canvasRef }) {
  const [open, setOpen] = useState(false)

  const handlePopup = e => {
    e.preventDefault()
    setOpen(!open)
  }
  return(
    <>
      <ButtonSignature onClick={handlePopup}>Firmar</ButtonSignature>
      <StyledPopup open={open} onClose={handlePopup} closeOnDocumentClick={false}>
        {close => (
          <>
            <SignatureCanvas canvasProps={{ className: 'signatureCanvas'}} ref={canvasRef} />
            <Button onClick={close} background='#f00'>Cerrar</Button>
            <Button onClick={clean} background='#004481'>Limpiar</Button>
            <Button onClick={save} background='#004481'>Confirmar</Button>
          </>
        )
        }
      </StyledPopup>
    </>
  )
}
