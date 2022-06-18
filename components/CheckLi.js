import styled from 'styled-components'

const Li = styled.li`
& > div {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  display: block;
  margin: 5px;
  width: 70%;
}
svg {
  display: block;
  width: 30%;
  color: #004481;
}
`

export default function CheckLi({ children }) {
  return(
    <Li>
      <div>
<svg height="20" viewBox="0 0 21 21" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><path d="m12.8571123 1.79063546c-3.70547974-2.40636667-8.66011018-1.35322746-11.06647684 2.35225226-2.40636667 3.70547972-1.35322746 8.66011018 2.35225226 11.06647678 1.40713892.9138067 2.9944136 1.3287299 4.55387082 1.2889715 2.54712886-.0649393 5.02004606-1.3428829 6.51260596-3.6412237 1.5774991-2.4291355 1.6682799-5.39509184.4997393-7.82805117"/><path d="m4.5 7.5 3 3 8-8"/></g></svg>
      <p>{children}</p>
      </div>
    </Li>
  )
}
