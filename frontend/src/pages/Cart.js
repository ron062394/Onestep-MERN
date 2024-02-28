import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]); // Initialize cart state as an empty array
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        if (!user || !user.token) {
          console.error("User or token is null");
          return;
        }

        const response = await fetch("/api/cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const cartData = await response.json();

        // Check if cartData is an object and contains a 'products' array
        if (typeof cartData === "object" && Array.isArray(cartData.products)) {
          setCart(cartData.products); // Set the products array as the cart state
        } else {
          console.error("Invalid cart data format");
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [user]);

  useEffect(() => {
    console.log(cart); // Log the updated value of cart
  }, [cart]);

  return (
    <div className="cart-section">
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

          {/* Check if cart is an array before using map */}
          {Array.isArray(cart) &&
            cart.map((item) => (
              <div key={item._id} className="cart-content-container">
                <div>
                  <img
                    className="cart-product-img"
                    src={item.product.image}
                    alt="product-img"
                  />
                  <span>{item.product.product}</span>
                </div>
                <div>
                  <span>{item.product.size}</span>{" "}
                  {/* Assuming size is a string */}
                </div>
                <div className="cart-item-qty">
                  <span>+</span>
                  <span>{item.quantity}</span>
                  <span>-</span>
                </div>
                <div>
                  <span>x</span>
                </div>
                <div>
                  <span>${item.product.price * item.quantity}</span>
                </div>
              </div>
            ))}

          <div className="total-container">
            {/* Calculate total quantity and price here */}
            <span>
              Quantity: {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
            <span>
              Total:{" "}
              {cart.reduce(
                (total, item) => total + item.quantity * item.product.price,
                0
              )}
              $
            </span>
          </div>

          <button className="secondary-btn">CHECK OUT</button>
        </div>
      </div>
      <div className="other-section">
        <h3>You might like</h3>
        <ProductList />
      </div>
    </div>
  );
}

export default Cart;
