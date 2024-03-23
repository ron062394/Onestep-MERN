// import "./Checkout.css"

function Checkout() {
    return (
      <section className="checkout-section">
        <div>
          <span>Checkout</span>
          <span>Back</span>
        </div>
        <hr />
        <div>
          progress bar
        </div>

        <div>
          <div>Delivery Address</div>
          <div>
            <span>
              <div>
                <span>John Doe</span>
                <span>Edit</span>
              </div>
              <div>Address</div>
              <div>Contact</div>
            </span>
          </div>
          <div>
            <span>
              <div>
                <span>John Doe</span>
                <span>Edit</span>
              </div>
              <div>Address</div>
              <div>Contact</div>
            </span>
          </div>
          <div>
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

        <hr/>
        <div>SELECT PAYMENT METHOD</div>
        <div>
          <span>Credit Card</span>
          <span>Paypal</span>
          <span>COD</span>
        </div>

        <div>Name On Card</div>
        <input type="text" placeholder="Your Card Number"/>
        <div>Card Number</div>
        <input type="number" placeholder="0000-0000-0000-0000"/>
        <div>
          <div>Prder Suummary</div>
          <div>
            <span>Merchandise Total Quantity:</span>
            <span>$534.00</span>
          </div>
          <div>
            <span>Merchandise Total:</span>
            <span>$534.00</span>
          </div>
          <div>
            <span>Discount:</span>
            <span>$35.00</span>
          </div>
          <div>
            <span>Subtotal:</span>
            <span>$429.00</span>
          </div>
          <div>
            <span>Shipping:</span>
            <span>$19.00</span>
          </div>
          <div>
            <span>Total Payment:</span>
            <span>$410.00</span>
          </div>
          <div></div>
          <button>Checkout</button>
        </div>

      </section>
    );
}
  
export default Checkout;