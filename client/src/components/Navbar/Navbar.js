import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Auth from "./../Auth/Auth";
import "./styles.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionType from "../../constants/actionTypes";
import Dropdown from "react-bootstrap/Dropdown";
import pic from "./../../images/profile.jpg";

const Navbarr = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigation = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigation("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    // if (token) {
    //   const decodedToken = decode(token);

    //   if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    // }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
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
                aria-describedby="basic-addon1"
              />
              <Button variant="outline-secondary" id="button-addon1">
                <BiSearchAlt2 />
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            {user?.result ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <img
                      src={pic}
                      width="37"
                      height="37"
                      className="d-inline-block "
                      alt="Website logo"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="/tutors">Explore Tutors</Dropdown.Item>
                    <Dropdown.Item href="/courses">My Courses</Dropdown.Item>
                    <Dropdown.Item href="/messages/0">Messages</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#" onClick={logout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Button variant="outline-warning" onClick={logout}>
                  Log out
                </Button>
              </>
            ) : (
              <Auth />
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;
