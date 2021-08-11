import React from 'react'
import styled from "styled-components"

function Welcomw() {
  return (
    <Container>
      <Wrapper>
        <Text>
          Welcome Admin

       </Text>
      </Wrapper>
    </Container>
  )
}

export default Welcomw

const Text = styled.div`
font-size: 30px;
margin-top: 20px;

`
const Container = styled.div`
padding: 35px;
padding-top: 0px;
padding-bottom: 0px;
`
const Wrapper = styled.div``
