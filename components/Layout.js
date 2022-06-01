import styled from 'styled-components'

const LayoutDiv = styled.div`
display: grid;
place-items: center;
width: 100%;
height: 100vh;
`

export default function Layout(props) {
  
  return (
    <LayoutDiv>{props.children}</LayoutDiv>
  )
}
