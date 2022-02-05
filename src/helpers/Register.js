import React, {useState,useEffect} from 'react';
import {Form, Button, FloatingLabel} from 'react-bootstrap'

function Register() {
    // const [user, setUser] = useState(userForm);
//   useEffect(() => {
    
//   setUser(user)  

//   }, [user]);
  
  return (
    <Form>
    {/* floating sign in for returning users  */}
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Email Address"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Password"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="password" placeholder="password" />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Name"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="name" placeholder="Name" />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Address"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="address" placeholder="Address" />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Phone Number"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="phoneNumber" placeholder="Phone Number" />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="landlordOrTenant"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="landlordOrTenant" placeholder="Landlord/Tenant" />
  </FloatingLabel>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default Register;
