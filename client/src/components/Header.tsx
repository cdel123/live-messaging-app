import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/home/saurabh/Desktop/WD/Messager/live-messaging-app/client/src/assets/whatsapp.png';
import { useNavigate } from 'react-router-dom';
// import addContact from './addContact';

function Header() {
  const navigate=useNavigate();
  return (
    <Navbar expand="lg" className="bg-red-200 h-20">
      <Container>
        {/* <img src={logo} alt="icon" className='h-20 w-20 ml-auto' /> */}
        <Navbar.Brand href="#home">Live-Messager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Add Contact</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("./addContact")}}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <img src={logo} alt="icon" className='h-10 w-10 ml-auto' />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;