import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import pic from "../AdminLogIn/img/ud1.png"



function HeaderAdmin({ onClickToggle, toggle }) {


  return (
    <Container>
      <Wrapper>
        <Header>
          <MenuCon>
            {
              toggle ? (<MenuIcon onClick={onClickToggle} color="green" style={{ color: "#004A1E", cursor: "pointer" }} fontSize='large' />) : (< FormatIndentDecreaseIcon onClick={onClickToggle} fontSize='large' style={{ color: "#004A1E", cursor: "pointer" }} />)
            }


          </MenuCon>
          <SideD>
            <AddAlertIcon style={{ color: "#004A1E" }} fontSize='large' />

            <ImgCon>
              <img src={pic} />
            </ImgCon>

          </SideD>

        </Header>
      </Wrapper>
    </Container>
  )
}

export default HeaderAdmin

const MenuCon = styled.div`
display: flex;
justify-content: center;
align-items: center;

`

const ImgCon = styled.div`
height: 50px;
width: 50px;
border-radius: 40px;


img{
  height: 50px;
width: 50px;
border-radius: 40px;
}

`

const SideD = styled.div`
display: flex;
width: 200px;
justify-content: space-around;
align-items: center;

height:50px ;
`

const Header = styled.div`
height: 50px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
display: flex;
justify-content: space-between;
padding: 30px;
padding-top: 0px;
padding-bottom: 0px;


`

const Wrapper = styled.div``

const Container = styled.div``




