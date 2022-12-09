import React, {useState,useEffect} from 'react';
import {Form, Button, FloatingLabel} from 'react-bootstrap'


function Register() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')


  useEffect(
    () => {
     
      let userFormData = {
        username: username,
        password: password,
        address: address,
        phoneNumber:phoneNumber,
        role: role,
        email:email,
        name:name
      }
      return userFormData
     
    },
    []
  )
  
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
    <Form.Control type="email"
     placeholder="name@example.com"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
      />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Password"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="password" 
    placeholder="password"
    value={password}
     onChange={(e) => setPassword(e.target.value)}
      />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="username"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="usernname" 
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
     />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Name"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="name" 
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
     />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Address"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="address"
     placeholder="Address"
     value={address}
     onChange={(e) => setAddress(e.target.value)} />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Phone Number"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control 
    type="phoneNumber" 
    placeholder="Phone Number"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)} />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="landlordOrTenant"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control
     type="landlordOrTenant"
      placeholder="Landlord/Tenant"
      value={role}
      onChange={(e) => setRole(e.target.value)} />
  </FloatingLabel>
    </Form.Group>set
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default Register;
