import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'; 



const Headerbar = () => {
    return(
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Google Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
                <Nav.Link href="/">Search</Nav.Link>
                <Nav.Link href="/pages/saved">Saved</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Headerbar;
