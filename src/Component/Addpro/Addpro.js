
import React, { useState } from 'react'
import styled from 'styled-components'
import SideAdmin from "../SideAdmin/SideAdmin"
import MiddleAdd from './MiddleAdd/MiddleAdd'


function Addpro() {

  const [toggle, setToggle] = useState(true)

  const onClickToggle = () => {
    setToggle(!toggle)
  }
  return (
    <Conatiner>
      <SideAdmin toggle={toggle} onClickToggle={onClickToggle} />
      <MiddleAdd onClickToggle={onClickToggle} toggle={toggle} />



    </Conatiner>
  )

}

export default Addpro

const Conatiner = styled.div`
display: flex;
`
