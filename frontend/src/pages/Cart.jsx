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

        const response = await fetch("https://onestep-api.vercel.app/api/cart", {
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

  console.log("Cart state:", cart); // Log the cart state outside JSX

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
          {/* Check if cart is an array before using map */}
          {Array.isArray(cart) &&
            cart.map((item) => (
              <div key={item._id} className="cart-content-container">
                <div>
                  {item.product &&
                    item.product.images &&
                    item.product.images[0] && (
                      <img
                        className="cart-product-img"
                        src={item.product.images[0]} // Access the first image
                        alt="product-img"
                      />
                    )}
                  {item.product && <span>{item.product.product}</span>}
                </div>
                <div>
                  <span>{item.size}</span> {/* Access the 'size' directly */}
                </div>
                <div className="cart-item-qty">
                  <span className="increament-btn">+</span>
                  <span>{item.quantity}</span>
                  <span className="decreament-btn">-</span>
                </div>
                <div>
                  <span>x</span>
                </div>
                <div>
                  <span>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}

          <div className="total-container">
            {/* Calculate total quantity and price here */}
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
      <div className="other-section">
        <h3>You might like</h3>
        <ProductList />
      </div>
    </div>
  );
}

export default Cart;
