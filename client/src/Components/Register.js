import React, { useState } from 'react'
import { Form,Button, Col } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { register } from '../Redux/Actions/authActions'
import {useNavigate} from 'react-router-dom'

function Register() {
  const [name,setName]= useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister=(e)=>{
      e.preventDefault()
      dispatch(register({name,email,password},navigate))
  }

  return (
    <div>
      <Col md={{ span: 6, offset: 3 }}>
      <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" onClick={(e)=>handleRegister(e)}>
          Submit
        </Button>
      </Form>
      </Col>
    </div>
  )
}

export default Register