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
                  {product.ratings !== 0
                    ? (product.totalRatings / product.ratings).toFixed(2)
                    : 0}
                  <span>({product.ratings})</span>
                </span>
              </div>
              <div className="product-img-container">
                {product.images.length > 0 && (
                  <img
                    className="product-card-img"
                    src={product.images[0]}
                    alt="product-img-preview"
                  />
                )}
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
            <button className="cart-btn">
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                ADD TO CART
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
