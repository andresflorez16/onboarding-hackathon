import styled from 'styled-components'
import Image from 'next/image'
import ButtonSignin from 'components/buttons/ButtonSignIn'
import Button from 'components/buttons/Button'

const HeaderContainer = styled.div`
position: fixed;
top: 0;
background-color: #fff;
width: 100%;
height: 10%;
box-shadow: 0 3px 3px #333;
padding: 10px 20px;
header {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.buttons {
  display: flex;
  width: 25%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
`

export default function Header() {
  return(
    <HeaderContainer>
      <header>
        <Image src={'/bbva.png'} width={133} height={40}/>
        <div className='buttons'>
          <ButtonSignin />
          <Button>Inicia sesión</Button>
        </div>
      </header>
    </HeaderContainer>
  )
}
