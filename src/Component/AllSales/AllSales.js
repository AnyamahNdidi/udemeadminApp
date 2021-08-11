
import React from 'react'
import styled from "styled-components"
import DailyCard from './DailyCard'
import MonthlyCard from './MonthlyCard'
import WeeklyCard from './WeeklyCard'

function AllSales() {
  return (
    <Container>
      <Wrapper>
        <AllSalesCard>
          <DailyCard />
          <WeeklyCard />
          <MonthlyCard />

        </AllSalesCard>

      </Wrapper>
    </Container>

  )
}

export default AllSales

const AllSalesCard = styled.div`

display: grid;
width: 100%;
grid-template-columns: 0.5fr 0.5fr 0.5fr;
justify-content: space-between;
grid-column-gap: 20px;

@media screen and (max-width:600px){
display: flex;
flex-wrap: wrap;
justify-content: center;

}


`

const Container = styled.div`
margin-top: -40px;
@media screen and (max-width:600px){
  margin-top: 20px;

}
`
const Wrapper = styled.div`
padding: 35px;


@media screen and (max-width:600px){
padding: 0px;

}

`