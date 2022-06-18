import styled from 'styled-components'
import Header from 'components/Header'
import Head from 'next/head'

const Container = styled.div`
width: 80%;
height: 86%;
display: flex;
justify-content: center;
align-items: center;
& > div {
  margin: 0 10px;
  width: 40%;
  height: 70%;
  background-color: #fff;
}
`

export default function SavingPlan() {
  return(
    <>
      <Head><title>Planes cuenta ahorros</title></Head>
      <Header />
      <Container>
        <div>Plan de nómina</div>
        <div>Plan de ahorros</div>
      </Container>
    </>
  )
}
