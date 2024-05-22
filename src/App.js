// App.jsx
import React from 'react';
import Product from './All-product-total/product';
import './App.css';
import Card from './ProductCard/Card';
import { useSelector } from 'react-redux';

function App() {
  var products = useSelector((state) => state.cart.Product);
  

  return (
    <div className='main'>
      <div className='container'>
        <div className='box'>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className='product'>
        <div className='product-item'>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default App;
