import React from 'react'
import styled from "styled-components"
import { Button } from "antd"
import 'antd/dist/antd.css'

function DataCard({ id, orderName, cusName, location, status, time, price }) {
  return (
    <Container>
      <Wrapper>
        <Oid>
          {id}
        </Oid>
        <Oname>
          {orderName}
        </Oname>
        <Cname>
          {cusName}
        </Cname>
        <Location>
          {location}
        </Location>
        <Ostatus>
          <Button style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "red",
            color: "white",
            width: "90px",
            border: " none"


          }}>
            {status}
          </Button>

        </Ostatus>
        <Dtime>
          {time}
        </Dtime>
        <Price>
          {price}
        </Price>
      </Wrapper>
    </Container>
  )
}

export default DataCard


const Price = styled.div`


width: 130px;
height: 30px;

`

const Dtime = styled.div`

width: 130px;
height: 30px;

`

const Ostatus = styled.div`

width: 130px;
height: 30px;

`

const Location = styled.div`

width: 150px;
height: 30px;

`

const Cname = styled.div`

width: 150px;
height: 30px;
`
const Oname = styled.div`

width: 150px;
height: 30px;


`

const Oid = styled.div`
width: 130px;
height: 30px;

`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
height: 55px;
border-bottom: 1px solid  #E5E5E5 ;
align-items: center;
`

const Container = styled.div``

