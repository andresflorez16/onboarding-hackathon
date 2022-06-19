import styled from 'styled-components'

const ButtonDiv = styled.button`
font-family: inherit;
background: #004481;
color: white;
padding: 1.35em 0;
font-size: 1em;
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

export default function ButtonSignature(props) {
  return(
    <ButtonDiv {...props}>
      <div className="icon">
<svg height="16" viewBox="0 0 21 21" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"><path d="m14 1c.8284271.82842712.8284271 2.17157288 0 3l-9.5 9.5-4 1 1-3.9436508 9.5038371-9.55252193c.7829896-.78700064 2.0312313-.82943964 2.864366-.12506788z"/><path d="m6.5 14.5h8"/><path d="m12.5 3.5 1 1"/></g></svg>
      </div>
      {props.children}
    </ButtonDiv>
  )
}
