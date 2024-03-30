import React, { useEffect } from "react";
import Loading from "../components/common/Loading";
import ProductList from "../components/product/ProductList";
import { useCart } from "../context/CartContext"; // Import the useCart hook
import Button from "../components/common/Button";
import { useNavigate } from 'react-router-dom';
import "./Cart.css";

function Cart() {
  const { cart, loading, incrementQuantity, decrementQuantity, updateCart } = useCart(); // Use the useCart hook to access cart data and functions
  const navigate = useNavigate();
  
  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart && cart.length === 0) {
      // Convert JSON string to JavaScript object and set cart context
      updateCart(JSON.parse(storedCart));
    }
  }, []); // Run this effect only once, on component mount

  // Update local storage whenever cart data changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart)
  }, [cart]); // Run this effect whenever cart data changes

  return (
    <div className="cart-section">
      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <div className="cart-section-container">
          <div className="cart-section-header">
            <span>Your Cart</span>
            <span className="text-underlined continue-shopping">
              Continue Shopping
            </span>
          </div>
          <div className="cart-container">
            <div className="cart-content-header">
              <span>Description</span>
              <span>Size</span>
              <span>Quantity</span>
              <span>Remove</span>
              <span>Price</span>
            </div>
            {Array.isArray(cart) &&
              cart.map((item) => (
                <div key={item._id} className="cart-content-container">
                  <div>
                    {item.product &&
                      item.product.images &&
                      item.product.images[0] && (
                        <img
                          className="cart-product-img"
                          src={item.product.images[0]}
                          alt="product-img"
                        />
                      )}
                    {item.product && <span>{item.product.product}</span>}
                  </div>
                  <div>
                    <span>{item.size}</span>
                  </div>
                  <div className="cart-item-qty">

                    <span
                      className="decrement-btn"
                      onClick={() =>
                        decrementQuantity(item.product._id, item.size)
                      }
                    >
                      -
                    </span>
                    <span>{item.quantity}</span>
                    <span
                      className="increment-btn"
                      onClick={() =>
                        incrementQuantity(item.product._id, item.size)
                      }
                    >
                      +
                    </span>
                  </div>
                  <div>
                    <span className="remove-btn">x</span>
                  </div>
                  <div>
                    <span>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}

            <div className="total-container">
              <span>
                Quantity: {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
              <span>
                Total:{" "}$
                {cart
                  .reduce(
                    (total, item) => total + item.quantity * item.product.price,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
            <div className="btn-container">
              <Button onClick={() => navigate(`/checkout`)}>Checkout</Button> {/* Use the Button component */}              
            </div>
          </div>
        </div>
      )}
      <div className="other-section">
        <ProductList />
      </div>
    </div>
  );
}

export default Cart;
