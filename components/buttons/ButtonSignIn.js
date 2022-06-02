import styled from 'styled-components'

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

export default function ButtonSignin() {
  return(
    <ButtonDiv>
      <div className="icon">
<svg height="16" viewBox="0 0 21 21" width="16" className="bi bi-telegram" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 2)"><path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z"/><path d="m11.5199327.67783074c1.1547685.41741154 1.9800673 1.52341097 1.9800673 2.82216926v1c0 1.29707884-.8475766 2.5813505-2 3 .6742649-.91876977 1.0109204-2.0857069 1.0099664-3.50081137s-.3309652-2.52222377-.9900337-3.32135789zm4.9800673 14.82216926h1c.5522847 0 1-.4477153 1-1 0-.2427251 0-.4854502 0-.7281753 0-2.1698712-1.7094418-3.82917861-3.8465775-4.66705336 0 0 2.8465775 2.39522866 1.8465775 6.39522866z" fill="currentColor"/></g></svg>
      </div>
      <p>Regístrate</p>
    </ButtonDiv>
  )
}
