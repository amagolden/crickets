import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNavbar = () => {
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">
              <img
                alt=""
                src="/logodark.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                crickets</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#polls">Polls</Nav.Link>
                <Nav.Link href="#allhands">All Hands</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
    
          <br />
        </>
    );}

export default AppNavbar;