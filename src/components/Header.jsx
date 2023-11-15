import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

function Header({ insideDashboard }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/projects">PROJECT FAIR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                </Navbar.Collapse>
                {
                    insideDashboard&&
                    <Navbar.Text>
                    <Button className='btn'> LOGOUT </Button>
                    </Navbar.Text>
                }
            </Container>
        </Navbar>
    )
}

export default Header