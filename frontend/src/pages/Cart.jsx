// Inside the Cart component
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import { useCart } from "../context/CartContext"; // Import the useCart hook
import './Cart.css'

function Cart() {
  const { cart, loading, incrementQuantity, decrementQuantity } = useCart(); // Use the useCart hook to access cart data and functions

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
                      className="increment-btn"
                      onClick={() =>
                        incrementQuantity(item.product._id, item.size)
                      }
                    >
                      +
                    </span>
                    <span>{item.quantity}</span>
                    <span
                      className="decrement-btn"
                      onClick={() =>
                        decrementQuantity(item.product._id, item.size)
                      }
                    >
                      -
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
            <button className="secondary-btn">CHECK OUT</button>
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
