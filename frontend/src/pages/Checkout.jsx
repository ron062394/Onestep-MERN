import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const merchandiseTotal = cart.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const shippingFee = 5.99;
  const tax = merchandiseTotal * 0.08; // Assuming 8% tax rate

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCardDetailsChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    console.log("Checkout completed");
    // Navigate to order confirmation page
    navigate("/order-confirmation");
  };

  return (
    <section className="checkout-section">
      <div className="checkout-header">
        <span>Checkout</span>
        <span className="back-link" onClick={() => navigate(-1)}>Back</span>
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
          <h2>Delivery Address</h2>
          <div className="address-card-container">
            {/* Replace with dynamic address data */}
            {["Address 1", "Address 2", "Address 3"].map((address, index) => (
              <div 
                key={index} 
                className={`address-card ${selectedAddress === address ? 'selected' : ''}`}
                onClick={() => handleAddressSelect(address)}
              >
                <span>
                  <div>
                    <span>John Doe</span>
                    <span className="edit-link">Edit</span>
                  </div>
                  <div>{address}</div>
                  <div>Contact: 123-456-7890</div>
                </span>
              </div>
            ))}
          </div>
          <hr />
          <div className="payment-container">
            <h2>SELECT PAYMENT METHOD</h2>
          </div>
          <div className="payment-method-container">
            <span 
              className={`payment-option ${paymentMethod === 'creditCard' ? 'selected-payment' : ''}`}
              onClick={() => handlePaymentMethodChange('creditCard')}
            >
              Credit Card
            </span>
            <span 
              className={`payment-option ${paymentMethod === 'paypal' ? 'selected-payment' : ''}`}
              onClick={() => handlePaymentMethodChange('paypal')}
            >
              Paypal
            </span>
            <span 
              className={`payment-option ${paymentMethod === 'cod' ? 'selected-payment' : ''}`}
              onClick={() => handlePaymentMethodChange('cod')}
            >
              COD
            </span>
          </div>
          {paymentMethod === 'creditCard' && (
            <div className="cc-container">
              <div className="card-input-container">
                <div>Name On Card</div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe" 
                  value={cardDetails.name}
                  onChange={handleCardDetailsChange}
                />
                <div>Card Number</div>
                <input 
                  type="text" 
                  name="number"
                  placeholder="0000-0000-0000-0000" 
                  value={cardDetails.number}
                  onChange={handleCardDetailsChange}
                />
                <div className="card-extra-details">
                  <div>
                    <div>Expiry Date</div>
                    <input 
                      type="text" 
                      name="expiry"
                      placeholder="MM/YY" 
                      value={cardDetails.expiry}
                      onChange={handleCardDetailsChange}
                    />
                  </div>
                  <div>
                    <div>CVV</div>
                    <input 
                      type="text" 
                      name="cvv"
                      placeholder="123" 
                      value={cardDetails.cvv}
                      onChange={handleCardDetailsChange}
                    />
                  </div>
                </div>
              </div>
              <img
                className="cc-img"
                src="https://www.shutterstock.com/image-photo/credit-card-on-png-background-600nw-2259495135.jpg"
                alt="Credit Card"
              />
            </div>
          )}
        </div>
        <div className="order-summary-container">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Merchandise Total:</span>
            <span>${merchandiseTotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Shipping Fee:</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Estimated Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Total Qty:</span>
            <span className="highlight-total">{totalQuantity}</span>
          </div>
          <hr />
          <div className="summary-item total">
            <span>Total Payment:</span>
            <span>${(merchandiseTotal + shippingFee + tax).toFixed(2)}</span>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>Complete Checkout</button>
          <p className="terms-conditions">
            By completing your purchase you agree to these <a href="#">Terms of Service</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
