
import React, { useState } from 'react'
import styled from 'styled-components'
import SideAdmin from "../SideAdmin/SideAdmin"
import MiddleSales from "./MiddleSales/MiddleSales"



function SalesCon() {

  const [toggle, setToggle] = useState(true)

  const onClickToggle = () => {
    setToggle(!toggle)
  }
  return (
    <Conatiner>
      <SideAdmin toggle={toggle} onClickToggle={onClickToggle} />
      <MiddleSales toggle={toggle} onClickToggle={onClickToggle} />




    </Conatiner>
  )

}

export default SalesCon

const Conatiner = styled.div`
display: flex;
`

