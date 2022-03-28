import React, { useState } from 'react'
import { Form,Button, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {login} from '../Redux/Actions/authActions'
function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    dispatch(login({email,password},navigate))
  }
  return (
    <div>
      <Col md={{ span: 6, offset: 3 }}>
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Link to='/Register'>SignUp</Link>
        <br/>
        <br/>
        <Button variant="primary" onClick={(e)=> handleLogin(e) }>
          Submit
        </Button>
      </Form>
      </Col>
    </div>
  )
}

export default Login