import {useState, useEffect} from 'react';

import './ProductList.css'

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/product')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        
      })
      .catch((error) =>  console.error(error));
  }, []);

  return (
    <div className="product-list-section">
      <div className='card-container'>
        {
          products.map((product) => (
            <div key={product.id} className='product-card'>
              <div className='product-card-content'>
                <div className='product-uppertext'>
                  <span className='new'>NEW</span>
                  <span className='product-rate'><img className='product-star' src="https://i.imgur.com/XsLLxLD.png" alt="" />{(product.totalRatings / product.ratings).toFixed(2)}<span>({product.ratings})</span></span>
                </div>
                <div className='product-img-container'>
                  <img className="product-card-img" src={product.image} alt="" />
                </div>
    
                <div className='product-card-price emphasized'>${product.price}</div>
                <div className='product-card-title emphasized'>{product.product}</div>
                <div className='product-card-description limited-height'>{product.description}</div>
              </div>
              <button className='cart-btn'>ADD TO CART</button>
            </div>
          ))
        }


 

      </div>
    </div>
  );
}

export default ProductList;
