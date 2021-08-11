import React from 'react'
import styled from "styled-components"
import Dispatch from './Dispatch'
import MostCus from './MostCus'


function DispathCus() {
  return (
    <Container>
      <Wrapper>
        <FirstBox>
          <Dispatch />
          <MostCus />
        </FirstBox>
      </Wrapper>
    </Container>
  )
}

export default DispathCus


const Container = styled.div`
margin-top: -20px;

`
const Wrapper = styled.div`
padding: 35px;

@media screen and (max-width:600px){
padding: 0px;
}


`
const FirstBox = styled.div`
display: grid;
width: 100%;
grid-template-columns: 1.5fr 2fr;
justify-content: space-between;
grid-column-gap: 20px;

@media screen and (max-width:600px){
display: flex;
flex-wrap: wrap;
justify-content: center;

}



`
