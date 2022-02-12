import React from 'react'
import {Row, Col, Form, Button, Container} from 'react-bootstrap';
export default function Login() {
  return (
    <div>
    
    <Container>
  <Row>
    <Col></Col>
    <Col xs={6}><Form style={{backgroundColor:"rgb(218, 247, 166)", margin:"100px 0px 0px 0px", borderRadius:"10px", padding:"20px 20px 20px 20px"}}>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <h2 style={{textAlign:"center", color:"IndianRed"}}><b>Sign In</b></h2>
      <Form.Label >Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group><p style={{fontsize:"10px", color:"black", padding:"0px 0px 0px 5px"}}>Select to Take</p>
    <Form.Select aria-label="Default select example">
  <option>Select your Course</option>
  <option value="1">WordPress</option>
  <option value="2">DevOps</option>
  <option value="3">Javascript</option>
  <option value="3">Others</option>
  </Form.Select>
    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{margin:"20px 0px 0px 0px"}}>
      <Form.Check type="checkbox" label="Remember Me" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form></Col>
    <Col></Col>
  </Row>
  </Container>
  
    </div>
  )
}
