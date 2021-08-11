
import React from 'react'
import styled from "styled-components"
import RecentCard from './RecentCard'

function RecentStatus() {
  return (
    <Container>
      <Wrapper>
        <RecentCard />


      </Wrapper>
    </Container>
  )
}

export default RecentStatus


const Container = styled.div``
const Wrapper = styled.div`

padding: 35px;
padding-top: 0px;


@media screen and (max-width:600px){
padding: 0px;

}
`
