import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.div`
width: 100%;
height: 70%;
display: flex;
justify-content: center;
align-items: center;
& > div {
  margin: 0 10px;
}
.card {
 height: 254px;
 width: 190px;
 @media (max-width: 460px) {
  width: 160px;
 }
 @media (max-width: 405px) {
  width: 150px;
 }
 @media (max-width: 381px) {
  width: 140px;
 }
 @media (max-width: 350px) {
  width: 120px;
 }
 position: relative;
 transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
 border-radius: 1em;
 box-shadow: 0 0 20px 8px #d0d0d0;
 cursor: pointer;
}

 /*Image*/
.card-image {
 height: 100%;
 width: 100%;
 img {
  border-radius: 1em;
 }
 position: absolute;
 transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/*Description */
.card-description {
 display: flex;
 position: absolute;
 gap: 1em;
 flex-direction: column;
 background-color: #004481;
 color: #fff;
 height: 70%;
 bottom: 0;
 border-radius: 1em 1em 0 0;
 transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
 padding: 1rem;
}

/*Text*/
.text-title {
 margin: 0;
 padding: 0;
 font-size: 1.1em;
 font-weight: 700;
 @media (max-width: 460px) {
  font-size: 1em;
 }
 @media (max-height: 569px) {
  font-size: .9em;
 }
}

.text-body {
 font-size: 1em;
 line-height: 150%;
 @media (max-width: 460px) {
  font-size: .9em;
 }
 @media (max-height: 569px) {
  margin: 0;
  font-size: .8em;
 }
}

/* Hover states */
.card:hover .card-description {
 transform: translateY(30%);
 @media (max-width: 650px) {
  transform: translateY(40%);
 }
 @media (max-width: 400px) {
  transform: translateY(30%);
 }
 @media (max-width: 381px) {
  transform: translateY(10%);
 }
 @media (max-height: 569px) {
  transform: translateY(5%);
 }
}

`

export default function Accounts() {
  return(
    <Container>
      <div className='savings'>
        <Link href={'/cuenta/ahorros'}>
          <div className="card">
            <div className="card-image">
              <Image src={'/savings.jpg'} width={500} height={500}/>
            </div>
              <div className="card-description">
                <p className="text-title">Cuenta de ahorros</p>
                <p className="text-body">Si necesitas ahorrar, esta es tu opción!</p>
              </div>
          </div>
        </Link>
      </div>
      <div className='checking'>
        <Link href={'/cuenta/corriente'}>
          <div className="card">
            <div className="card-image">
              <Image src={'/checking.jpg'} width={500} height={500}/>
            </div>
              <div className="card-description">
                <p className="text-title">Cuenta corriente</p>
                <p className="text-body">Ingresa y adquiere tus fondos de forma inmediata</p>
              </div>
          </div>
        </Link>
      </div>
    </Container>
  )
}
