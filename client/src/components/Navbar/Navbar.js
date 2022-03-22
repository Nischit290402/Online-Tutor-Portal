import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {BiSearchAlt2} from 'react-icons/bi';
const Navbarr = () => {
    return (
	<>
	<Navbar sticky="top" bg="dark" variant="dark" >
    <Container>
    <Navbar.Brand href="/">
      <img
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Website logo"
      />
      Tutor Portal
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/tutors">Tutors</Nav.Link>
      <Nav.Link href="/courses">Courses</Nav.Link>
      
    </Nav>
    <Nav className="me-auto">
      <InputGroup className="me">
        <FormControl
        placeholder="Search"
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"/>
        <Button variant="outline-secondary" id="button-addon1">
          <BiSearchAlt2/>
        </Button>
      </InputGroup>
    </Nav>
    <Nav>
      <Nav.Item><Button variant="outline-success" className="justify-content-end">
      <Nav.Link href="/sigin">Sign In</Nav.Link>
      </Button></Nav.Item>
    </Nav>
    </Container>
  </Navbar>
	</>
);
};

export default Navbarr;