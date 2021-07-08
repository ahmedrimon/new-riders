import React from "react";
import './Header.css';
import { Navbar, Nav} from "react-bootstrap";

const Home = () => {
  return (
    <div>
    
    <Navbar expand="lg">
      <Navbar.Brand href="/home">Pick-Riders</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/login">Destination</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        
        <button className="main-button">Login</button>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Home;
