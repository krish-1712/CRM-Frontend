import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';


export function Heading({ children }) {
    const history = useNavigate();
    return (
        <div className="nav">
            <div className="bar">
                <Navbar id='dark' expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" id='num'>CRM APPLICATIONS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" id='kit' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home"style={{ color: "white" }}><NavLink to='/Open' id='horn'> <i className="fa-solid fa-house"></i> Home</NavLink></Nav.Link>
                                <Nav.Link href="#link"style={{ color: "white" }}><NavLink to='/About' id='horn1'><i className="fa-solid fa-circle-info"></i> About</NavLink></Nav.Link>
                                <Nav.Link href="#link"style={{ color: "white" }}><NavLink to='/Login' id='horn2'> <i class="fas fa-sign-in"></i>Login</NavLink></Nav.Link>
                                <Nav.Link href="#link"style={{ color: "white" }}><NavLink to='/Sign' id='horn3'><i class="fas fa-sign-in"></i> Signup</NavLink></Nav.Link>
                              
                            
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="main-content">
                {children}
            </div>

        </div>
    )
}