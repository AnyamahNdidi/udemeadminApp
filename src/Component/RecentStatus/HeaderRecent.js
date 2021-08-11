import React from 'react'
import styled from 'styled-components'

function HeaderRecent() {
  return (
    <Container>
      <Wrapper>
        <Text1>
          Order ID
</Text1>
        < Oname>
          Order Name
</Oname>
        < Cname>
          Customer Name
</ Cname>
        <Location>
          Location
</Location>
        <Text1>
          Order Status
</Text1>
        <Text1>
          Delivered Time
</Text1>
        <Text1>
          Price
</Text1>
      </Wrapper>
    </Container>
  )
}

export default HeaderRecent


const Cname = styled.div`

width: 150px;
height: 30px;
color: white;
`
const Oname = styled.div`

width: 150px;
height: 30px;
color: white;

`


const Location = styled.div`

width: 150px;
height: 30px;
color: white;

`

const Text1 = styled.div`
display: flex;
color: white;
width: 130px;
height: 30px;


`

const Wrapper = styled.div`
display: flex;
background-color: #004A1E;
display: flex;
padding:20px ;
justify-content: space-between;


`

const Container = styled.div`
margin-top: 30px;
`

