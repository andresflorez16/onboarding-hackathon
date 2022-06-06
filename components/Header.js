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
@media (max-width: 560px) {
  height: 18%;
}
header {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 560px) {
    flex-wrap: wrap;
    .logo {
      margin: 0 auto;
      height: 50%;
    }
  }
}
.buttons {
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 750px) {
    width: 80%;
  }
  @media (max-width: 560px) {
    width: 100%;
    text-align: items;
    height: 50%;
    p {
      margin: 0;
      font-size: 12px;
    }
  }
  @media (max-width: 350px) {
    margin-top: 5px;
    p {
      font-size: 10px;
    }
  }
}
`

export default function Header() {
  return(
    <HeaderContainer>
      <header>
        <div className='logo'>
          <Link href='/' passHref>
            <a>
              <Image style={{ cursor: 'pointer' }} src={'/bbva.png'} width={133} height={40}/>
            </a>
          </Link>
        </div>
        <div className='buttons'>
          <ButtonSignin />
          <Button route="/personas/login" >Inicia sesión</Button>
        </div>
      </header>
    </HeaderContainer>
  )
}
