import React, { useState } from 'react'
import styled from 'styled-components'
import SideAdmin from "../SideAdmin/SideAdmin"
import OrderDis from './OrderDis/OrderDis'



function OrderCon() {
  const [toggle, setToggle] = useState(true)

  const onClickToggle = () => {
    setToggle(!toggle)
  }
  return (
    <Conatiner>
      <SideAdmin toggle={toggle} onClickToggle={onClickToggle} />
      <OrderDis toggle={toggle} onClickToggle={onClickToggle} />
    </Conatiner>
  )

}

export default OrderCon

const Conatiner = styled.div`
display: flex;
`
