import styled from 'styled-components'
import FormSession from 'components/FormSession'
import { useRouter } from 'next/router'

const SessionDiv = styled.div`
display: grid;
place-items: center;
width: 80%;
height: 70%;
background-color: #fff;
border-radius: 20px;
box-shadow:  -5px 5px 60px #bebebe44,
             5px -5px 60px #fff6;
@media (max-width: 880px) {
  margin-top: 100px;
  width: 90%;
  height: 75%;
}
`

export default function MethodSession() {
  const router = useRouter()
  return(
    <SessionDiv>
      <FormSession method={router.query.method} />
    </SessionDiv>
  )
}
