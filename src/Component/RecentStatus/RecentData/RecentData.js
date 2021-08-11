import React from 'react'
import styled from 'styled-components'
import DataCard from './DataCard'
import data from "./Data.json"


function RecentData() {
  return (
    <Container>
      <Wrapper>
        {
          data.map(({ id, cusName, price, orderName, status, time, location }) => (
            <DataCard id={id} cusName={cusName} price={price} status={status} time={time} location={location} orderName={orderName} />
          ))
        }

      </Wrapper>
    </Container>
  )
}

export default RecentData



const Wrapper = styled.div`

overflow-y: scroll;
height: 300px;

`

const Container = styled.div`
padding:20px ;
`
