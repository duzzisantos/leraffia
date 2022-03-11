import "../App.css";
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import {Link} from "react-router-dom"

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="success" expand={false} fixed="top" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: "whitesmoke" }}>
            <img
              style={{
                height: "60px",
                width: "60px",
                backgroundSize: "contain",
              }}
              src="https://cdn.pixabay.com/photo/2012/04/26/14/10/handbag-42571_640.png"
              alt="our-logo"
            />
            Le Raffia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Le Raffia
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                style={{ color: "black" }}
              >
                <Nav.Link as={Link} to="/" style={{ color: "black" }}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="offers" style={{ color: "black" }}>
                  Offers
                </Nav.Link>
                <Nav.Link as={Link} to="sales" style={{ color: "black" }}>
                  Sales
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
