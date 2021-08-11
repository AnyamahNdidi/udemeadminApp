import styled from "styled-components"
import React from 'react'

import { BsInboxesFill } from "react-icons/bs";

function MonthlyCard() {
  return (
    <Container>
      <Wrapper>

        <Wrappercon>
          <Price>
            200,6000
  </Price>
          <Title>
            Monthly Sales
  </Title>
        </Wrappercon>
        <WrapeprIcon>
          <IconWrapper>
            <BsInboxesFill style={{ fontSize: "50px", color: "#F0FFF0" }} />
          </IconWrapper>

        </WrapeprIcon>

      </Wrapper>
    </Container>
  )
}

export default MonthlyCard

const IconWrapper = styled.div`


display: flex;
justify-content: center;
align-items: center;
background-color: #b64925;
width: 70%;
height: 60px;




`

const Price = styled.div`
font-weight: 500;
font-size: 35px;

`
const Title = styled.div``

const WrapeprIcon = styled.div`
display: flex;
justify-content: center;

align-items: center;


width: 50%;

height: 120px;
`

const Wrappercon = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

width: 50%;
height: 120px;
`

const Container = styled.div``
const Wrapper = styled.div`
height: 110px;
background-color: 	#F0FFF0;
box-shadow: 0 8px 32px 0 rgba(1, 38, 15, 0.19);
display: flex;


@media screen and (max-width:600px){
width: 300px;
margin-bottom: 10px;
}
`