import './App.css';
import { sampleProducts } from './data';

function App() {
  return (
    <div>
      <header>Levy E-Commerce Project</header>
      <main>
        <ul className='products'>
          {sampleProducts.map((product) => (
            <li key={product.slugURL}>
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
            </li>
          ))}
        </ul>
      </main>
      <footer>All right reserved</footer>
    </div>
  );
}

export default App;
