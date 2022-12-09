import React, {useState} from 'react';
import {Form, Button, FloatingLabel} from 'react-bootstrap'

function LoginForms({userForm}) {
  const [user, setUser] = useState(userForm);


  return (
    <Form>
    {/* floating sign in for returning users  */}
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="username"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control style={{width: '100%'}} type="email" placeholder="name@example.com" />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Password"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control style={{width: '100%'}} type="password" placeholder="password" />
  </FloatingLabel>
    </Form.Group>
  

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Keep Me Signed In" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  );
}

export default LoginForms;
