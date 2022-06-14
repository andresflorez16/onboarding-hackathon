import styled, { keyframes } from 'styled-components'

const inputHighlighter = keyframes`
from {
  background: #5264AE;
 }

 to {
  width: 0;
  background: transparent;
 }
`

const Container = styled.div`
margin: ${props => props.size === 'reduced' ? '5px 0' : '50px 0'};
position: relative;
display: grid;
place-items: center;
  
.input {
   font-size: ${props => props.size === 'reduced' ? '1.1em' : '1.5em'};
   padding: 10px 10px 10px 5px;
   display: inline-block;
   width: ${props => props.size === 'reduced' ? '60%' : '70%'};
   border: none;
   border-bottom: 1px solid #515151;
   background: transparent;
   font-family: Helvetica;
   margin-top: 20px;
  @media (max-width: 880px) {
    width: ${props => props.size === 'reduced' ? '100%' : '80%'};
  }
  @media (max-width: 590px) {
    font-size: 1.3em;
  }
  @media (max-width: 590px) {
    width: ${props => props.size === 'reduced' ? '100%' : '90%'};
    font-size: 1.2em;
  }
  @media (max-width: 400px) {
    width: 90%;
    font-size: 1em;
  }
  }

  .input:focus {
   outline: none;
  }

  label {
   font-family: Helvetica;
   color: #999;
   font-size: 1em;
   font-weight: normal;
   position: absolute;
   pointer-events: none;
   transition: 0.2s ease all;
   -moz-transition: 0.2s ease all;
   -webkit-transition: 0.2s ease all;
  }

  .input ~ label, .input:valid ~ label {
   top: ${props => props.size === 'reduced' ? '0' : '-20px'};
   font-size: ${props => props.size === 'reduced' ? '1em' : '1.2em'};
   color: #004481;
  @media (max-width: 370px) {
    font-size: ${props => props.size === 'reduced' ? '1em' : '1.2em'};
  }
  }

  .bar {
   position: relative;
   display: block;
   width: 200px;
  }

  .bar:before, .bar:after {
   content: '';
   height: 2px;
   width: 0;
   bottom: 1px;
   position: absolute;
   background: #5264AE;
   transition: 0.2s ease all;
   -moz-transition: 0.2s ease all;
   -webkit-transition: 0.2s ease all;
  }

  .bar:before {
   left: 50%;
  }

  .bar:after {
   right: 50%;
  }

  .input:focus ~ .bar:before, .input:focus ~ .bar:after {
   width: 50%;
  }

  .highlight {
   position: absolute;
   height: 60%;
   width: 100px;
   top: 25%;
   left: 50%;
   pointer-events: none;
   opacity: 0.5;
  }

  .input:focus ~ .highlight {
   animation: ${inputHighlighter} 0.3s ease;
  }
`

export default function Input(props) {
  return(
    <Container size={props.size}>
      <input required type={props.type} name={props.name} onChange={props.onChange} className="input" pattern={props.pattern} min={props.min} step={props.step}/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{props.children}</label>
    </Container>
  )
}
