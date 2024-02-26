import ProductList from "../components/ProductList";
import './Cart.css'

function Cart() {
  return (
    <div className="cart-section">
        <div className="cart-section-container">
            <div className="cart-section-header">
                <span>Your Cart</span>
                <span className="text-underlined continue-shopping">Continue Shopping</span>
            </div>
            <div className="cart-container">
            
                <div className="cart-content-header">
                    <span>Description</span>
                    <span>Size</span>
                    <span>Quantity</span>
                    <span>Remove</span>
                    <span>Price</span>
            
                </div>


                <div className="cart-content-container">
                    <div>
                        <img className='cart-product-img' src="https://i.imgur.com/JEi3BZJ.png" alt="product-img" />
                        <span>Lorem ipsum.</span>
                    </div>
                    <div>
                        <span>42</span>
                    </div>
                    <div className="cart-item-qty">
                        <span>+</span>
                        <span>1</span>
                        <span>-</span>
                    </div>
                    <div>
                        <span>x</span>
                    </div>
                    <div>
                        <span>$89</span>
                    </div>
                </div>

                <div className="cart-content-container">
                    <div>
                        <img className='cart-product-img' src="https://i.imgur.com/JEi3BZJ.png" alt="product-img" />
                        <span>Lorem ipsum.</span>
                    </div>
                    <div>
                        <span>42</span>
                    </div>
                    <div className="cart-item-qty">
                        <span>+</span>
                        <span>1</span>
                        <span>-</span>
                    </div>
                    <div>
                        <span>x</span>
                    </div>
                    <div>
                        <span>$89</span>
                    </div>
                </div>


                <div className="cart-content-container">
                    <div>
                        <img className='cart-product-img' src="https://i.imgur.com/JEi3BZJ.png" alt="product-img" />
                        <span>Lorem ipsum.</span>
                    </div>
                    <div>
                        <span>42</span>
                    </div>
                    <div className="cart-item-qty">
                        <span>+</span>
                        <span>1</span>
                        <span>-</span>
                    </div>
                    <div>
                        <span>x</span>
                    </div>
                    <div>
                        <span>$89</span>
                    </div>
                </div>


                <div className="cart-content-container">
                    <div>
                        <img className='cart-product-img' src="https://i.imgur.com/JEi3BZJ.png" alt="product-img" />
                        <span>Lorem ipsum.</span>
                    </div>
                    <div>
                        <span>42</span>
                    </div>
                    <div className="cart-item-qty">
                        <span>+</span>
                        <span>1</span>
                        <span>-</span>
                    </div>
                    <div>
                        <span>x</span>
                    </div>
                    <div>
                        <span>$89</span>
                    </div>
                </div>


                <div className="cart-content-container">
                    <div>
                        <img className='cart-product-img' src="https://i.imgur.com/JEi3BZJ.png" alt="product-img" />
                        <span>Lorem ipsum.</span>
                    </div>
                    <div>
                        <span>42</span>
                    </div>
                    <div className="cart-item-qty">
                        <span>+</span>
                        <span>1</span>
                        <span>-</span>
                    </div>
                    <div>
                        <span>x</span>
                    </div>
                    <div>
                        <span>$89</span>
                    </div>
                </div>



                <div className="total-container">
                    <span>Quantity: 6</span>
                    <span>Total: 145$</span>
                </div>
                
                <button className="secondary-btn">CHECK OUT</button>

            </div>
        </div>
        <div  className="other-section">
            <h3>You might like</h3>
            <ProductList/>    
        </div>
    </div>
  );
}

export default Cart;
