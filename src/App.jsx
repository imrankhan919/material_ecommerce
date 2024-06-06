import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import { ProductProvider } from "./providers/products/ProductContext";
import { CartProvider } from "./providers/cart/CartContext";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
