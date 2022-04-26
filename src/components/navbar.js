import logo from '../images/logo.png'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Search } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'


function NavBar() {
    return <>
    <Navbar   bg="dark"  variant="dark" expand="lg" fixed="scroll" className='navigationBar pb-0'>
          <Container fluid className='navContainer'>
              <Navbar.Brand href="#home" className='mr-0'>
                  <img
                      src={logo}
                      width="200"
                      height="200"
                      className="d-inline-block align-top "
                      alt="Lions Club of Colombo Centennial logo"
                      
                    />
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav fill className="mt-3 justify-content-center" >
                      <Nav.Link as={Link} to='/'>Home</Nav.Link>
                      <Nav.Link as={Link} to='/aboutUs' >About Us</Nav.Link>
                      <Nav.Link as={Link} to='/leoClub' >Leo Club</Nav.Link>
                      <Nav.Link as={Link} to='/lcif' >LCIF</Nav.Link>
                      <Nav.Link as={Link} to='/member' >Member</Nav.Link>
                      <Nav.Link as={Link} to='/events' >Events</Nav.Link>
                      <Nav.Link as={Link} to='/conference' >Conference</Nav.Link>
                      <Form className="d-flex mb-2">
                        <FormControl
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                  
                        />
                        <Button variant="outline-primary"><Search/></Button>
                      </Form>
                    </Nav>
                  </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
}


export default NavBar;