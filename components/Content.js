import styled from 'styled-components'
import Button from 'components/buttons/Button'

const ContainerDiv = styled.div`
width: 95%;
height: 70%;
display: flex;
justify-content: center;
align-items: center;
//background-color: #004481;
background-color: #fff9;
border-radius: 20px;
section {
  width: 40%;
  padding: 15px;
  h2 {
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    font-size: 1.4em;
  }
  h1 {
    text-shadow: 1px 1px 1px #000;
    font-size: 3em;
    color: #fcdb03;
  }
  p {
    color: #333;
  }
  margin: 10px;
}
.image {
  width: 60%;
  height: 100%;
  img {
    object-fit: cover;
    border-radius: 20px;
    width:100%;
    height:100%;
  }
}
`


export default function Content() {
  return(
    <>
      <ContainerDiv>
        <section>
          <p>Empieza ahorrar desde tu casa</p>
          <h1>¡Ahorra tu dinero!</h1>
          <h2>Abre ya tu cuenta de ahorros/corriente</h2>
          <Button route="/personas/login" >Empieza aquí</Button>
        </section>
        <div className='image'>
          <img src='/cerdito2.jpg' alt='image'/>
        </div>
      </ContainerDiv>
    </>
  )
}
