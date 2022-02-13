import React, {useState} from 'react';
import { Container, Col, Row, Tabs, Tab} from 'react-bootstrap';
import LoginForms from './loginForm';
import Register from './Register';

function Login({user}) {
 const [userLogin, setUserLogin] = useState(user)
 const [key, setKey] = useState('login');
// TODO need to bring in the user name and password part of the store, and then dispatch the username and password to the the server
// to be checked and returned and added to userData, to be displayed thru the application
    //styles for the form
    const style = {
        color: 'rgba(255,255,255,1.5)',
        backgroundColor: 'rgba(113,121,153, 0.4)'
      }

  return (

    <Container  style={{padding: '150px', marginTop:'10%', width:'50vw', backgroundColor:'rgba(255, 140, 0, 0.5)'}}>
    <Col xs='1' md='3' lg='4'></Col>
    <Col>
      <Row md={7}  className=' justify-content-center'>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      style={{color: 'black'}}
    >
      <Tab eventKey="login" title="Login">
      <LoginForms userForm={userLogin} />
      </Tab>
      <Tab eventKey="register" title="Register">
      <Register userForm={userLogin} />
      </Tab>

    </Tabs>
      
      </Row>
    </Col>
    <Col xs='1' md='3' lg='4'></Col>
   </Container>
  )
}

export default Login;
