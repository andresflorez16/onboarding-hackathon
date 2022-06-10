import Image from 'next/image'
import styled from 'styled-components'

const AvatarDiv = styled.div`
background-color: #004481;
border-radius: 10px;
display: flex;
align-items: center;
padding: 3px 7px;
margin-right: 10px;
.img {
  border-radius: 50%;
}
strong {
  display: inline-block;
  padding-left: 10px;
  color: #fff;
}
@media (max-width: 1000px) {
  padding-left: 5px;
  strong {
    padding-left: 5px;
    padding-top: 7px;
  }
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 380px) {
  strong {
    font-size: .8em;
  }
}
`

export default function Avatar({ user }) {
  console.log(user.image)
  return (
    <AvatarDiv>
      {
        user
          ? <><Image className='img'  alt={user.email} src={user.image} title={user.displayName} width='40' height='40' />
            <strong>{user.displayName}</strong></>
          : null
      }
    </AvatarDiv>
  )
}
