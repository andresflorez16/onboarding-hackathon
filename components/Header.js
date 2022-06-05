import styled from 'styled-components'
import Image from 'next/image'
import ButtonSignin from 'components/buttons/ButtonSignIn'
import Button from 'components/buttons/Button'
import Link from 'next/link'

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
  @media (max-width: 1450px) {
    width: 30%;
  }
  @media (max-width: 1200px) {
    width: 35%;
  }
  @media (max-width: 1050px) {
    width: 40%;
  }
  @media (max-width: 920px) {
    width: 50%;
  }
}
`

export default function Header() {
  return(
    <HeaderContainer>
      <header>
        <Link href='/' passHref>
          <a>
            <Image style={{ cursor: 'pointer' }} src={'/bbva.png'} width={133} height={40}/>
          </a>
        </Link>
        <div className='buttons'>
          <ButtonSignin />
          <Button route="/personas/login" >Inicia sesión</Button>
        </div>
      </header>
    </HeaderContainer>
  )
}
