import styled from 'styled-components'
import Image from 'next/image'
import ButtonSignin from 'components/buttons/ButtonSignIn'
import ButtonSignOut from 'components/buttons/ButtonSignOut'
import Button from 'components/buttons/Button'
import Avatar from 'components/Avatar'
import Link from 'next/link'
import useUser, { USER_STATES } from 'hooks/useUser'
import { useEffect, useState} from 'react'

const HeaderContainer = styled.div`
position: fixed;
top: 0;
background-color: #fff;
width: 100%;
height: 10%;
box-shadow: 0 3px 3px #333;
padding: 10px 20px;
z-index: 10;
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
    width: 55%;
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
  const user = useUser()
  const [url, setUrl] = useState('/')

  useEffect(() => {
    user && setUrl('/cuenta')
  }, [user])

  return(
    <HeaderContainer>
      <header>
        <div className='logo'>
          <Link href={url} passHref>
            <a>
              <Image style={{ cursor: 'pointer' }} src={'/bbva.png'} width={133} height={40}/>
            </a>
          </Link>
        </div>
        {
          user
            ?
              <div className='buttons'>
                <Avatar user={user}/>
                <ButtonSignOut />
              </div>
            :
              <div className='buttons'>
                <ButtonSignin />
                <Button route="/personas/login" >Inicia sesión</Button>
              </div>
        }
      </header>
    </HeaderContainer>
  )
}
