import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/alienwareLogo.png'

const Header = () => {
    return (
        <div className=''>
            <div>
                {/* <Link to='/'>HOME</Link> <Link to='/reviews'>REVIEWS</Link> <Link to='/dashboard'>DASHBOARD</Link> <Link to='/blogs'>BLOGS</Link> <Link to='/about'>ABOUT</Link> */}



                <Navbar className='' collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img className='logo-img' src={logo} alt="" />
                            <span className=''>Alienware</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav ">

                            <Nav className="me-5">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                            </Nav>
                            <Nav className='me-5'>
                                <Nav.Link as={Link} to="/reviews">REVIEWS</Nav.Link>
                            </Nav>
                            <Nav className='me-5'>

                                <Nav.Link as={Link} to='/dashboard'>DASHBOARD</Nav.Link>
                            </Nav>
                            <Nav className='me-5'>
                                <Nav.Link as={Link} to='/blogs'>BLOGS</Nav.Link>
                            </Nav>
                            <Nav className='me-5'>
                                <Nav.Link as={Link} to='/about'>ABOUT</Nav.Link>
                            </Nav>


                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;