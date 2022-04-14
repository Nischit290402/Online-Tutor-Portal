import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container  from 'react-bootstrap/Container';
import{ Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
return (
	<Navbar sticky="bottom" variant="primary" >
	<Container>
		<ul>
		<li><Link to='/'>Home</Link></li>
		<li><Link to='/'>Pricing</Link></li>
		<li><Link to='/'>Contact us</Link></li>
		</ul>
	</Container>
	<Nav className="me-auto">
	Desktop Version 1.0
	</Nav>
	</Navbar>
);
};
export default Footer;
