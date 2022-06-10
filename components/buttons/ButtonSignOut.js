import styled from 'styled-components'
import { signOutUser } from '../../firebase/client'

const ButtonDiv = styled.button`
font-family: inherit;
background: #004481;
color: white;
padding: 1.35em 0;
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
 background: #f00;
 height: 2em;
 width: 2em;
 border-radius: 2em;
 border: 1px solid #fff;
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
 color: #fff;
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

export default function ButtonSignOut() {
  return(
    <ButtonDiv onClick={e => signOutUser()}>
      <div className="icon">
<svg height="16" viewBox="0 0 21 21" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 3)"><path d="m10.595 10.5 2.905-3-2.905-3"/><path d="m13.5 7.5h-9"/><path d="m10.5.5-8 .00224609c-1.1043501.00087167-1.9994384.89621131-2 2.00056153v9.99438478c0 1.1045695.8954305 2 2 2h8.0954792"/></g></svg>
      </div>
      <p>Cerrar Sesión</p>
    </ButtonDiv>
  )
}
