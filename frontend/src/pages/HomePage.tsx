import { Col, Row } from 'react-bootstrap';
import { sampleProducts } from '../data';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <Row className='products'>
        {sampleProducts.map((product) => (
          <Col key={product.slugURL} sm={6} md={4} lg={3}>
            <Link to={'/product/' + product.slugURL}>
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
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
