import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const App: React.FC = () => {
  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar id='Navbar-id' bg='dark' variant='dark' expand='lg'>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Ecommerce</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav>
                <LinkContainer to='/cart'>
                  <Nav.Link>Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/signin'>
                  <Nav.Link>Sign In</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className='text-center'>All right reserved</div>
      </footer>
    </div>
  );
};

export default App;
