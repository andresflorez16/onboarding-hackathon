import styled from 'styled-components'

const Select = styled.select`
padding: 2px 10px;
border: 1px solid #222;
border-radius: 10px;
font-family: Helvetica;
font-size: .9em;
color: #004481;
cursor: pointer;
background-color: #fff;
transition: all .2s ease;
&:hover {
  background-color: #ddd;
}
`
export default function Dropdown(props) {
  return(
    <>
      <Select onChange={props.onChange}>
        <option value={'default'}>Tipo de documento</option>
        <option value={'cedula'}>Cédula de ciudadanía</option>
        <option value={'stranger'}>Cédula de estranjería</option>
      </Select>
    </>
  )
}
