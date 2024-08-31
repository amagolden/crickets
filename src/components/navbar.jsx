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
                src="/bullseyelogo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                en<span className="text-warning">gauge</span></Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/allhands">All Hands</Nav.Link>
                <Nav.Link href="/polls">Polls</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
    
          <br />
        </>
    );}

export default AppNavbar;