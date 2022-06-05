import styled from 'styled-components'
import FormSession from 'components/FormSession'
import { useRouter } from 'next/router'

const SessionDiv = styled.div`
display: grid;
place-items: center;
width: 80%;
height: 60%;
background-color: #fff;
border-radius: 20px;
`

export default function MethodSession() {
  const router = useRouter()
  return(
    <SessionDiv>
      <FormSession method={router.query.method} />
    </SessionDiv>
  )
}
