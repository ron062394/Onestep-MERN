import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
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
      } finally {
        setLoading(false); // Set loading state to false after fetching data
      }
    };
  
    fetchCartData();
  }, [user, cart]); // Add cart as a dependency to refetch data when cart changes
  

  // Update local storage whenever cart data changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); // Run this effect whenever cart data changes

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  const incrementQuantity = async (productId, size) => {
    try {
      const response = await fetch(`https://onestep-api.vercel.app/api/cart/increment/${productId}/${size}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to increment quantity");
      }
      const updatedItem = await response.json();
      setCart(prevCart => prevCart.map(item => item._id === updatedItem._id ? updatedItem : item));
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };

  const decrementQuantity = async (productId, size) => {
    try {
      const response = await fetch(`https://onestep-api.vercel.app/api/cart/decrement/${productId}/${size}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to decrement quantity");
      }
      const updatedItem = await response.json();
      setCart(prevCart => prevCart.map(item => item._id === updatedItem._id ? updatedItem : item));
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, loading, updateCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
