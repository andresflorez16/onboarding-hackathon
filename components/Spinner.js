import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

const SpinnerDiv = styled.div`
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #004481;
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #004481 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
`

export default function Spinner() {
  return (
    <SpinnerDiv><div className="lds-ring"><div></div><div></div><div></div><div></div></div></SpinnerDiv>
  )
}
