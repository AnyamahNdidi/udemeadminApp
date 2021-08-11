import React from 'react'
import styled from 'styled-components'
import { IconName, AiOutlineBoxPlot, AiOutlineAreaChart } from "react-icons/ai";
import { BsViewStacked } from "react-icons/bs";


function WeeklyCard() {
  return (
    <Container>
      <Wrapper>

        <Wrappercon>
          <Price>
            100,6000
  </Price>
          <Title>
            Weekly Sales
  </Title>
        </Wrappercon>
        <WrapeprIcon>
          <IconWrapper>
            <BsViewStacked style={{ fontSize: "45px", color: "#F0FFF0" }} />
          </IconWrapper>

        </WrapeprIcon>

      </Wrapper>
    </Container>
  )
}

export default WeeklyCard

const IconWrapper = styled.div`


display: flex;
justify-content: center;
align-items: center;
background-color: #4a0101;
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