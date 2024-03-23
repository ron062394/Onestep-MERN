// ProductInfo.js
import React from "react";
import Button from "../Button"
import { useNavigate } from "react-router-dom";

function ProductInfo({ product, selectedSize, onSizeChange, quantity, onQuantityChange, onAddToCart, navigate }) {
    return (
      <div className="product-info-container shadow">
        <h3>{product.product}</h3>
        {/* Size selection and other product info */}
        {/* ... */}
        <div className="btn-container">
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={onQuantityChange}
            max={product.stocks}
            className="purchase-qty"
            disabled={!selectedSize}
          />
          <Button onClick={onAddToCart}>Add to Cart</Button>
          <Button onClick={() => navigate(`/checkout/${product._id}`)}>Checkout</Button>
        </div>
      </div>
    );
  }
  
  export default ProductInfo;