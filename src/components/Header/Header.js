import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import "./Header.css";
const Header = () => {
  return (
    <div>
    <Navbar variant="dark" className="Nav">
    <Navbar.Brand href="#home">Quizizz </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
   
  </Navbar>
    </div>
  )
}

export default Header
