import React from "react";
import {Box,Container,Row,Column,FooterLink,Heading,} from "./styles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		All right reserved
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
