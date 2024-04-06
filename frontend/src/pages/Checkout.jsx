import React from "react";
import { useCart } from "../context/CartContext"; // Import the useCart hook
import "./Checkout.css";

function Checkout() {
  // Use the useCart hook to access cart data
  const { cart } = useCart();

  // Calculate order summary based on cart items
  const merchandiseTotal = cart.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="checkout-section">
      <div>
        <span>Checkout</span>
        <span>Back</span>
      </div>
      <hr />
      <div className="timeline">
        <div className="circle done"></div>
        <div className="line done"></div>
        <div className="circle done"></div>
        <div className="line"></div>
        <div className="circle"></div>
      </div>
      <div className="delivery-timeline">
        <div>Delivery Address</div>
        <div>Select Payment</div>
        <div>Order Complete</div>
      </div>
      <div className="check-out-container">
        <div className="address-container">
          <div>Delivery Address</div>
          <div className="address-card-container">
            <div className="address-card">
              <span>
                <div>
                  <span>John Doe</span>
                  <span>Edit</span>
                </div>
                <div>Address</div>
                <div>Contact</div>
              </span>
            </div>
            <div className="address-card">
              <span>
                <div>
                  <span>John Doe</span>
                  <span>Edit</span>
                </div>
                <div>Address</div>
                <div>Contact</div>
              </span>
            </div>
            <div className="address-card">
              <span>
                <div>
                  <span>John Doe</span>
                  <span>Edit</span>
                </div>
                <div>Address</div>
                <div>Contact</div>
              </span>
            </div>
          </div>
          <hr />
          <div className="payment-container">SELECT PAYMENT METHOD</div>
          <div className="payment-method-container">
            <span className="selected-payment">Credit Card</span>
            <span>Paypal</span>
            <span>COD</span>
          </div>
          <div className="cc-container">
            <div className="card-input-container">
              <div>Name On Card</div>
              <input type="text" placeholder="Your Card Number" />
              <div>Card Number</div>
              <input type="number" placeholder="0000-0000-0000-0000" />
            </div>
            <img
              className="cc-img"
              src="https://www.shutterstock.com/image-photo/credit-card-on-png-background-600nw-2259495135.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="order-summary-container">
          <div>Order Summary</div>
          <div>
            <span>Merchandise Total Quantity:</span>
            <span>${merchandiseTotal.toFixed(2)}</span>
          </div>
          <div>
            <span>Total Qty:</span>
            <span className="highlight-total">{totalQuantity}</span>
          </div>
          <div>
            <span>Total Payment:</span>
            <span>${merchandiseTotal.toFixed(2)}</span>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
