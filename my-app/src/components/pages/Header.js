import React from 'react';
// import { Link } from 'react-router-dom';
import './styling/style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">Reinforcement Learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="tictactoe">Tic Tac Toe</Nav.Link>
            <Nav.Link href="explorer">Explorer</Nav.Link>
            <Nav.Link href="chess">Chess</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}




export default Header;