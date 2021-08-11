import React from 'react'
import styled from 'styled-components'

import HeaderAdmin from "../../HeaderAdmin/HeaderAdmin"
import OrderContent from './OrderContent/OrderContent'

function OrderDis({ onClickToggle, toggle }) {
  return (
    <Container>
      <HeaderAdmin onClickToggle={onClickToggle} toggle={toggle} />
      <HeaderCon>
        <OrderContent />

      </HeaderCon>



    </Container>
  )
}

export default OrderDis

const Container = styled.div`

display: flex;
flex-direction: column;
flex: 1;
height: auto;
`
const HeaderCon = styled.div`
height: 90vh;
display: flex;
flex-direction: column;
overflow-y: scroll;


@media screen and (max-width: 600px) {
    height: 500px;
    
  }
`
