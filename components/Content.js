import styled from 'styled-components'
import Button from 'components/buttons/Button'
import useUser, { USER_STATES } from '../hooks/useUser'

const ContainerDiv = styled.div`
width: 95%;
height: 70%;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff9;
border-radius: 20px;
box-shadow:  -5px 5px 60px #bebebe44,
             5px -5px 60px #fff6;
@media (max-width: 950px) {
  flex-wrap: wrap;
}
@media (max-width: 560px) {
  flex-wrap: wrap;
  height: 50%;
}
section {
@media (max-width: 950px) {
  width: 100%;
}
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
    font-size: 3rem;
    color: #fcdb03;
  }
  span {
    color: #333;
  }
  margin: 10px;
  @media (max-width: 1200px) {
    h1 {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 950px) {
    h1 {
      font-size: 2rem;
    }
  }
}
.image {
  width: 60%;
  height: 100%;
  @media (max-width: 950px) {
    width: 100%;
    height: 60%;
    position: relative;
  }
  img {
    object-fit: cover;
    border-radius: 20px;
    width:100%;
    height: 100%;
}
`


export default function Content() {
  const user = useUser()
  return(
    <>
      <ContainerDiv>
        <section>
          <span>Empieza ahorrar desde tu casa</span>
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
