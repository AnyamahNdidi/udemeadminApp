import React from 'react'
import styled from 'styled-components'

function RecentName() {
  return (
    <Container>
      <Wrapper>
        RECENT PLACE ORDER
      </Wrapper>

    </Container>
  )
}

export default RecentName

const Wrapper = styled.div`
font-weight: 600;
font-size: 20px;


`

const Container = styled.div`
padding: 20px;
padding-top: 30px;
padding-bottom: 30px;
`
