
import React from 'react'
import styled from "styled-components"
import { IconName, AiOutlineBoxPlot, AiOutlineAreaChart } from "react-icons/ai";



function DailyCard() {
  return (
    <Container>
      <Wrapper>

        <Wrappercon>
          <Price>
            34,6000
          </Price>
          <Title>
            Daily Sales
          </Title>
        </Wrappercon>
        <WrapeprIcon>
          <IconWrapper>
            <AiOutlineAreaChart style={{ fontSize: "50px", color: "#F0FFF0" }} />
          </IconWrapper>

        </WrapeprIcon>

      </Wrapper>
    </Container>
  )
}

export default DailyCard

const IconWrapper = styled.div`


display: flex;
justify-content: center;
align-items: center;
background-color: #ff0000;
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
