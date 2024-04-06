import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Loading from "../common/Loading";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://onestep-api.vercel.app/api/product")
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
              <div className="product-card-overlay">
                <Link
                  to={`/product/${product._id}`}
                  className="btn-link"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button className="cart-btn">
                    <span className="text">Buy Now</span>
                    <svg
                      className="arrow"
                      viewBox="0 0 448 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
