import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/product")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="product-list-section">
      <div className="card-container">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-card-content">
              <div className="product-uppertext">
                <span className="new">NEW</span>
                <span className="product-rate">
                  <img
                    className="product-star"
                    src="https://i.imgur.com/XsLLxLD.png"
                    alt="rate-star"
                  />
                  {(product.totalRatings / product.ratings).toFixed(2)}
                  <span>({product.ratings})</span>
                </span>
              </div>
              <div className="product-img-container">
                <img className="product-card-img" src={product.image} alt="" />
              </div>

              <div className="product-card-price emphasized">
                ${product.price}
              </div>
              <div className="product-card-title emphasized limited-height1">
                {product.product}
              </div>
              <div className="product-card-description limited-height2">
                {product.description}
              </div>
            </div>
            <div className="cart-btn">
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                ADD TO CART
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
