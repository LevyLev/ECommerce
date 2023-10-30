import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { sampleProducts } from './data';

function App() {
  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand href='/'>Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>
          </Container>
          <Nav>
            <a href='/cart' className='nav-link'>
              Cart
            </a>
            <a href='/signin' className='nav-link'>
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
          <Row className='products'>
            {sampleProducts.map((product) => (
              <Col key={product.slugURL} sm={6} md={4} lg={3}>
                <div className='product'>
                  <img
                    className='product-image'
                    src={product.image}
                    alt='product'
                  />
                  <div className='product-name'>
                    <a href='product.html'>{product.name}</a>
                  </div>
                  <div className='product-brand'>{product.brand}</div>
                  <div className='product-price'>{`$${product.price}`}</div>
                  <div className='product-rating'>
                    {product.rating} Stars ({product.reviews} Reviews)
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer>
        <div className='text-center'>All right reserved</div>
      </footer>
    </div>
  );
}

export default App;
