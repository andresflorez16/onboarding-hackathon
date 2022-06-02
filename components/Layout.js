import styled from 'styled-components'

const LayoutDiv = styled.div`
background-color: #004481;
display: grid;
place-items: center;
width: 100%;
height: 100vh;
font-family: Helvetica;
`

export default function Layout(props) {
  
  return (
    <LayoutDiv>{props.children}</LayoutDiv>
  )
}
