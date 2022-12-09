import React, {useEffect, useState} from 'react';
import { Container, Col, Row, Tabs, Tab} from 'react-bootstrap';
import {  useNavigate} from 'react-router-dom';
import LoginForms from './loginForm';
import Register from './Register';
import axios from 'axios'

function Login({}) {
 const [userLogin, setUserLogin] = useState()
 const [userRegister,setUserRegister] = useState()
 const [key, setKey] = useState('login');
 let loginUsed = ''
 let submittedByUser = false
 let history = useNavigate()
 let isLoggedIn = false
// TODO need to bring in the user name and password part of the store, and then dispatch the username and password to the the server
// to be checked and returned and added to userData, to be displayed thru the application
    //styles for the form
    let userData =(loginUsed === 'Login') ? userLogin : userRegister
    let usersData = {}
    const style = {
        color: 'rgba(255,255,255,1.5)',
        backgroundColor: 'rgba(113,121,153, 0.4)'
      }
   useEffect(() => {
    if(submittedByUser === true){
    if(loginUsed === 'Login'){
      handleLogin(userData)
      console.log("HandleLogin ran and got" + usersData)
    }
      else {
      handleRegister(userData)
      console.log("HandleLogin ran and got" + usersData)
    }
    isLoggedIn = true
    history.push('./dashboard')
  }
  
   }, [submittedByUser])
    const handleLogin = (userData) => {
    const {username, password} = userData
  axios
    .post('https://jdm-express-jwt-api.herokuapp.com/login', {
        username: username,
        password: password
    }, {withCredentials: true})
    .then((res) => {
      return res.data
    }).then(results => {
      usersData = results.data
      
    })
    .catch(err => console.error(err))
}
const handleRegister = (userData) => {
  const { username, password,address,phoneNumber,role,email,name } = userData
axios
  .post('https://jdm-express-jwt-api.herokuapp.com/register', {
      username: username,
      password: password,
      address: address,
      phoneNumber:phoneNumber,
      role: role,
      email: email,
      name:name
  }, 
  {withCredentials: true})      
  .then(res => {
    return res.data
  }).then(results => {
    usersData = results.data
    
  })
  .catch(err => console.error(err))
}
  return (

    <Container  style={{padding: '150px', marginTop:'10%', width:'50vw', backgroundColor:'rgba(255, 140, 0, 0.5)'}}>
    <Col></Col>
    {/* <Col style={{width:'100%'}}> */}
      <Row style={{width:'100%'}} className=' justify-content-center'>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      style={{color: 'black'}}
    >
      <Tab  className="mb-3" eventKey="login" title="Login" loginUsed={loginUsed='Login'} userSubmit={submittedByUser}>
      <LoginForms style={{width:'100%'}} userFormData={userLogin}  />
      </Tab>
      <Tab  className="mb-3" eventKey="register" title="Register" loginUsed={loginUsed='Register'} userSubmit={submittedByUser}>
      <Register userFormData={userRegister} loginUsed={loginUsed}/>
      </Tab>

    </Tabs>
      
      </Row>
    {/* </Col>
    <Col xs='1' md='3' lg='4'></Col> */}
   </Container>
  )
}

export default Login;
