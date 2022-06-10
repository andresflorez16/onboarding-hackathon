import styled from 'styled-components'
import Image from 'next/image'
import { loginFacebook, loginGmail, loginOutlook } from '../firebase/client'

const MethodsDiv = styled.div`
display: flex;
justify-content: center;
width: 90%;
background-color: #bbb;
border-radius: 10px;
padding: 10px 0;
box-shadow:  -5px 5px 60px #bebebe44,
             5px -5px 40px #aaa6;
.providerDiv {
  margin: 0 10px;
  cursor: pointer;
  transition: all .3s ease;
  &:hover {
    box-shadow: 1px 5px 5px #2229;
    border-radius: 50%;
  }
}
`

export default function Methods() {

  return(
    <MethodsDiv>
      <div className='providerDiv' onClick={loginGmail}>
        <Image src={'/google.png'} width={50} height={50} />
      </div>
      <div className='providerDiv' onClick={loginFacebook}>
        <Image src={'/facebook.png'} width={50} height={50} />
      </div>
    </MethodsDiv>
  )
}
