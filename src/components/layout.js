import * as React from "react";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const DivLayout = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;

  max-width: 720px;
  
  button {
    width: 100px;
  }
`;

const Layout = ({ pageTitle, children }) => {
  return (
    <DivLayout>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Gatsby React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <h1 className={"heading"}>{pageTitle}</h1>
        {children}
        {/*<Button variant={'danger'}>click A</Button>*/}
        {/*<Button variant={'success'}>click B</Button>*/}
        {/*<ButtonGroup aria-label="Basic example">*/}
        {/*  <Button variant="info">Left</Button>*/}
        {/*  <Button variant="warning">Middle</Button>*/}
        {/*  <Button variant="secondary">Right</Button>*/}
        {/*</ButtonGroup>*/}
      </main>
    </DivLayout>
  );
};

export default Layout;
