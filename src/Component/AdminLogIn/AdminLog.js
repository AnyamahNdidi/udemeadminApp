import React, { useState } from 'react'
import styled from "styled-components"
import pic from './img/ud1.png'
import { Button, Input } from "antd"
import { app } from "../../Base"
import { Link, useHistory } from "react-router-dom";


const savedata = app.firestore().collection("udeme")

function AdminLog() {
  const [email, setEail] = useState("")
  const [password, setpassword] = useState("")
  const [userName, setuserName] = useState("")
  const [toggle, setToggle] = useState(true)
  const hist = useHistory();


  const handleToggle = () => {
    setToggle(!toggle)
  }

  const signInUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password)
    hist.push("/overview")
  }

  const signUpUser = async () => {
    const newUser = await app.auth().createUserWithEmailAndPassword(email, password)

    savedata.doc(newUser.user.uid).set({
      userName,
      email,
      password
    });
    setEail("")
    setpassword("")
    setuserName("")

    hist.push("/")

  }




  return (
    <Container>

      <Wrapper>
        <Logo>
          <LogoImg>
            <img src={pic} />
          </LogoImg>
        </Logo>

        {
          toggle ? (
            <ConInput>
              <label>Email</label>
              <Input
                style={{ width: "300px" }}
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => {
                  setEail(e.target.value)
                }}
              />
              <label>Password</label>

              <Input.Password
                style={{ width: "300px" }}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value)
                }}
              />
              <br />
              <Button
                style={{
                  width: "300px",
                  backgroundColor: "#004A1E",
                  color: "white",
                  height: "50px",
                  borderRadius: "5px"
                }}

                onClick={() => {
                  // console.log(email)
                  // console.log(password)
                  signInUser()

                }}

              >
                Log In
            </Button>




            </ConInput>

          ) : (

            <ConInput>

              <label>UserName</label>
              <Input
                style={{ width: "300px" }}
                placeholder="UserName"
                type="text"
                value={userName}
                onChange={
                  (e) => {
                    setuserName(e.target.value)
                  }
                }
              />

              <label>Email</label>
              <Input
                style={{ width: "300px" }}
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => {
                  setEail(e.target.value)
                }}
              />
              <label>Password</label>

              <Input.Password
                style={{ width: "300px" }}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value)
                }}

              />
              <br />
              <Button
                style={{
                  width: "300px",
                  backgroundColor: "#004A1E",
                  color: "white",
                  height: "50px",
                  borderRadius: "5px"
                }}


                onClick={() => {
                  signUpUser()
                }}

              >
                Sign Up
            </Button>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>Already have an Account,</div>
                <div
                  style={{
                    marginLeft: "5px",
                    color: "red",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}

                  onClick={handleToggle}

                >
                  Login In Here
                  </div>
              </div>


            </ConInput>
          )
        }


      </Wrapper>

    </Container>
  )
}

export default AdminLog

const LogoImg = styled.div`
height: 80px;
width: 80px;


img{
  height: 80px;
width: 80px;
object-fit: contain;
}
`

const ConInput = styled.div`

height: 250px;
width: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 5px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
padding: 20px;
`

const Logo = styled.div`
height: 100px;
width: 320px;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
flex-direction: column;
align-items: center;
justify-content: center;
display: flex;
height: 100vh;
background-color: #C0DE8A;
`

const Container = styled.div`

`
