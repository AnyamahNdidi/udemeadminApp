
import React from 'react'
import styled from "styled-components"
import HeaderRecent from './HeaderRecent'
import RecentData from './RecentData/RecentData'
import RecentName from './RecentName'

function RecentCard() {
  return (
    <Container>
      <Wrapper>
        <TheBox>
          <RecentName />
          <LineLine>
          </LineLine>
          <HeaderRecent />
          <RecentData />

        </TheBox>

      </Wrapper>
    </Container>
  )
}

export default RecentCard

const LineLine = styled.div`
height: 0.5px;
background-color: #E5E5E5;

`

const Container = styled.div`
@media screen and (max-width:600px){

margin-bottom: 30px;
}
`
const Wrapper = styled.div`

`
const TheBox = styled.div`
border-radius: 10px;
height: 550px;
background-color: 	#F0FFF0;
display: flex;
flex-direction: column;
box-shadow: 0 8px 32px 0 rgba(1, 38, 15, 0.19);


@media screen and (max-width:600px){
width: 300px;
margin-bottom: 10px;
overflow-x: scroll;
}
`
