import React, { useState } from 'react'
import styled from 'styled-components'
import SideAdmin from "../SideAdmin/SideAdmin"
import MiddleFeedMiddle from './MiddleFeed/MiddleFeedMiddle'


function FeedCon() {

  const [toggle, setToggle] = useState(true)

  const onClickToggle = () => {
    setToggle(!toggle)
  }
  return (
    <Conatiner>
      <SideAdmin toggle={toggle} onClickToggle={onClickToggle} />
      <MiddleFeedMiddle toggle={toggle} onClickToggle={onClickToggle} />





    </Conatiner>
  )

}

export default FeedCon


const Conatiner = styled.div`
display: flex;
`