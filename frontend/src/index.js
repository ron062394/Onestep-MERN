import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'; // Import AuthContextProvider
import { CartProvider } from './context/CartContext'; // Import CartProvider

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartProvider> {/* Wrap App with CartProvider */}
        <App />
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
