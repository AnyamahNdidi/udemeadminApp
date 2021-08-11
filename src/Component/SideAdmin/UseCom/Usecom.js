import React, { useContext } from 'react'
import styled from "styled-components"
import { AppContext } from "../../GlobalContext/GlobalContext"
import pic from "../../AdminLogIn/img/ud1.png"

function Usecom() {
  const { data } = useContext(AppContext)

  return (
    <Container>
      <Wrapper>
        <ImgCon>
          <img src={pic} />
        </ImgCon>
        <NameCon>
          <Text1>
            {data && data.userName}
          </Text1>
          <Text2>
            Admin
          </Text2>
        </NameCon>

      </Wrapper>

    </Container>
  )
}

export default Usecom

const NameCon = styled.div`
 
`

const Text1 = styled.div`
font-weight: bold;
`

const Text2 = styled.div``

const ImgCon = styled.div`
height: 50px;
width: 50px;
border-radius: 50px;

img{
  height: 50px;
width: 50px;

object-fit: contain;
}

`

const Container = styled.div`
padding: 5px;
`

const Wrapper = styled.div`
display: flex;
height: 60px;
background-color: white;
margin-top: 20px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
border-radius: 5px;

justify-content: space-around;
align-items: center;
`

