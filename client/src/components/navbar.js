import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const Navbar = () => {
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Google Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Search</Nav.Link>
                <Nav.Link href="#link">Results</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Navbar;
