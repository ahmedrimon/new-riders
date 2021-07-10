import React from "react";
import './Header.css';
import { Navbar, Nav} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/login')
  }
  return (
    <div>
    
    <Navbar expand="lg">
      <Navbar.Brand href="/home">Pick-Riders</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto px-2">
          <Nav.Link className="spacing" href="/home">Home</Nav.Link>
          <Nav.Link className="spacing" href="/login">Destination</Nav.Link>
          <Nav.Link className="spacing" href="/blog">Blog</Nav.Link>
          <Nav.Link className="spacing" href="/contact">Contact</Nav.Link>
        </Nav>
        
        <button onClick={() => handleClick()} className="main-button">Login</button>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Home;
