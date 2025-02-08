import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./components/MenuPage";
import CartPage from "./components/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} /> {/* Trang Thực Đơn */}
        <Route path="/cart" element={<CartPage />} /> {/* Trang Giỏ Hàng */}
      </Routes>
    </Router>
  );
}

export default App;
