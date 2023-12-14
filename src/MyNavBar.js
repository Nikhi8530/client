
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar" fixed='top'>
        <Container>
          <Navbar.Brand className='mbrand'>PETCO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link className='nlink' to='/home' >Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='nlink' to='/profile'>Profile</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='nlink' to='/pets'>Pets</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='nlink' to='/mypets'>My Pets</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='nlink' to='/request'>Request</Link>
              </Nav.Link>
              <Nav.Link>
                        <Link className='nlink' to='/login'>Login</Link>
              </Nav.Link>
            </Nav>
            <Nav.Link>
                        <Link className='nlink' to='/Registration'>Registration</Link>
              </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
