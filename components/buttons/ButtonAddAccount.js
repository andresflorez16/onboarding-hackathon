import styled from 'styled-components'
import Link from 'next/link'

const ButtonDiv = styled.button`
font-family: inherit;
background: #004481;
color: white;
padding: 1.1em 0;
font-size: 17px;
border: none;
border-radius: 0.7em;
letter-spacing: 0.08em;
position: relative;
display: flex;
align-content: center;
align-items: center;
overflow: hidden;
height: 2.1em;
padding-left: 2.8em;
padding-right: 0.9em;
cursor: pointer;
margin-right: 10px;

.icon {
 background: #fff;
 height: 2em;
 width: 2em;
 border-radius: 2em;
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 0.4em;
 transition: all 0.5s;
}

svg {
margin: 10px 0;
 transition: all 0.5s;
 color: #2CA0D9;
 width: 1.2rem;
 height: 1.2rem;
}

&:hover .icon svg {
 transform: rotate(360deg);
}

&:hover .icon {
 width: calc(100% - 0.85rem);
 border-radius: 0.5em;
}
`

export default function ButtonSignin(props) {
  return(
      <ButtonDiv>
        <div className="icon">
<svg height="16" viewBox="0 0 21 21" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8"/><path d="m5.5 9.5 2 2 5-5"/></g></svg>
        </div>
        <p>{props.children}</p>
      </ButtonDiv>
  )
}
