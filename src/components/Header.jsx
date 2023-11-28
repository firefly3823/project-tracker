import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { tokenAuthContest } from '../contexts/AuthToken'

function Header({ insideDashboard }) {
    const {setIsAuth} = useContext(tokenAuthContest)
    const navigate = useNavigate()
    const handleLogout = ()=>{
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("token")
        setIsAuth(false)
        navigate('/')

    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">PROJECT FAIR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                </Navbar.Collapse>
                {
                    insideDashboard&&
                    <Navbar.Text>
                            <Button onClick={handleLogout} className='btn'> LOGOUT </Button>
                    </Navbar.Text>
                }
            </Container>
        </Navbar>
    )
}

export default Header