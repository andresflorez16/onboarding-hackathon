import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
details {
	position: relative;
	width: 300px;
	margin-right: 1rem;
}

details[open] {
	z-index: 1;
}

summary {
	padding: 1rem;
	cursor: pointer;
	border-radius: 5px;
	background-color: #ddd;
	list-style: none;
}

summary::-webkit-details-marker {
	display: none;
}

details[open] summary:before {
	content: '';
	display: block;
	width: 100vw;
	height: 100vh;
	background: transparent;
	position: fixed;
	top: 0;
	left: 0;
}

summary:after {
	content: '';
	display: inline-block;
	float: right;
	width: .5rem;
	height: .5rem;
	border-bottom: 1px solid currentColor;
	border-left: 1px solid currentColor;
	border-bottom-left-radius: 2px;
	transform: rotate(45deg) translate(50%, 0%);
	transform-origin: center center;
	transition: transform ease-in-out 100ms
}

summary:focus {
	outline: none;
}

details[open] summary:after {
	transform: rotate(-45deg) translate(0%, 0%);
}

ul {
	width: 100%;
	background: #ddd;
	position: absolute;
	top: calc(100% + .5rem);
	left: 0;
	padding: 1rem;
	margin: 0;
	box-sizing: border-box;
	border-radius: 5px;
	max-height: 200px;
	overflow-y: auto;
}

li {
	margin: 0;
	padding: 1rem 0;
	border-bottom: 1px solid #ccc;
  list-style: none;
}

li:first-child {
	padding-top: 0;
}

li:last-child {
	padding-bottom: 0;
	border-bottom: none;
}

/* FAKE SELECT */

summary.radios {
	counter-reset: radios;
}

input[type=radio] {
	counter-increment: radios;
	appearance: none;
	display: none;
}

input[type=radio]:checked {
	display: inline;
}

input[type=radio]:after {
	content: attr(title);
	display: inline;
	font-size: 1rem;
}

ul.list {
	counter-reset: labels;
}

label {
	width: 100%;
	display: block;
	cursor: pointer;
}
`
export default function Select() {
	const [value, setValue] = useState(null)

  const handleChange = e => {
		setValue({ value: e.target.value, name: e.target.id })
		console.log(value)
  }
  const handleForm = e => {
    e.preventDefault()
    const data = Object.entries(new FormData(e.target))
    console.log(data)
  }
  return(
    <>
      <Container>
        <form onSubmit={handleForm}>
        <details className="custom-select">
          <summary className="radios">
		        <input type="radio" name="item" id="default" title="Tipo de identificación" defaultChecked onChange={handleChange}/>
		        <input type="radio" name="item" id="item1" title="Cédula de ciudadanía" onChange={handleChange} />
		        <input type="radio" name="item" id="item2" title="Pasaporte" onChange={handleChange}/>
	        </summary>
          <ul className="list">
            <li>
              <label htmlFor="item1">Cédula de ciudadanía</label>
            </li>
            <li>
              <label htmlFor="item2">Pasaporte</label>
            </li>
          </ul>
        </details>
          <button>test</button>
        </form>
      </Container>
    </>
  )
}
