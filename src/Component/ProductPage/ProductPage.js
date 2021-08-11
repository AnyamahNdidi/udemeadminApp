import React, { useState } from 'react'
import styled from 'styled-components'
import SideAdmin from "../SideAdmin/SideAdmin"
import ProMiddle from '../OderCon/ProMiddle/ProMiddle'



function ProductPage() {

  const [toggle, setToggle] = useState(true)

  const onClickToggle = () => {
    setToggle(!toggle)
  }
  return (
    <Conatiner>
      <SideAdmin toggle={toggle} onClickToggle={onClickToggle} />
      <ProMiddle onClickToggle={onClickToggle} toggle={toggle} />

    </Conatiner>
  )
}

export default ProductPage

const Conatiner = styled.div`
display: flex;
`
