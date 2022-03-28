import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Actions/authActions'
function NavbarU() {
  const token = localStorage.getItem('token')
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
       <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Authentification</Navbar.Brand>
        <Nav className="me-auto">
          {
            token && user? 
            <>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/Profile'>Profile</Nav.Link>
                 <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
            </>
            :
            <>
                 <Nav.Link as={Link} to='/'>Home</Nav.Link>
                 <Nav.Link as={Link} to='/Login'>Login</Nav.Link>
            </>
          }
         
        </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarU