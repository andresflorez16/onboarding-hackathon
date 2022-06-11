import Image from 'next/image'
import styled from 'styled-components'

const AvatarDiv = styled.div`
background-color: #004481;
border-radius: 10px;
display: flex;
align-items: center;
padding: 3px 7px;
margin-right: 10px;
cursor: pointer;

.img {
  border-radius: 50%;
}

&:hover {
  .img{
    transition: transform .3s ease;
    transform: rotate(-45deg);
  }
}

p {
  margin: 0;
  letter-spacing: 0.08em;
  padding: 0 0 0 5px;
  color: #fff;
}

@media (max-width: 380px) {
  p {
    font-size: 12px;
  }
}
`

export default function Avatar({ user }) {
  return (
    <AvatarDiv>
      {
        user
          ? <><Image className='img'  alt={user.email} src={user.image} title={user.displayName} width='40' height='40' />
            <p>{user.displayName}</p></>
          : null
      }
    </AvatarDiv>
  )
}
