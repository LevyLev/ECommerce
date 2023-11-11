import { Col, Row } from 'react-bootstrap';
import { sampleProducts } from '../data';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { ApiError } from '../types/ApiError';
import { getError } from '../utils';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

type State = {
  products: Product[];
  loading: boolean;
  error: string;
};

type Action =
  | { type: 'FETCH_PRODUCTS' }
  | { type: 'FETCH_PRODUCTS_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_PRODUCTS_ERROR'; payload: string };

const initialState: State = {
  products: [],
  loading: true,
  error: '',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, loading: true };
    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_PRODUCTS_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [{ products, loading, error }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_PRODUCTS' });

      try {
        const res = await axios.get('/api/products');
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data });
      } catch (err) {
        dispatch({
          type: 'FETCH_PRODUCTS_ERROR',
          payload: getError(err as ApiError),
        });
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant='danger'>{error}</MessageBox>
  ) : (
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
                <div className='product-name'>{product.name}</div>
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
