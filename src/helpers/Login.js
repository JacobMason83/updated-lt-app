import React, {useState} from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import Forms from './Forms';

function Login({user}) {
 const [userLogin, setUserLogin] = useState(user)




    //styles for the form
    const style = {
        color: 'rgba(255,255,255,1.5)',
        backgroundColor: 'rgba(113,121,153, 0.4)'
      }

  return (

    <>
    <Col xs='1' md='3' lg='4'></Col>
    <Col>
      <Row md={7} style={style} className=' justify-content-center'>
      <Forms userForm={userLogin} />
      </Row>
    </Col>
    <Col xs='1' md='3' lg='4'></Col>
   </>
  )
}

export default Login;
