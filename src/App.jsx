import React from 'react'
import Product from './pages/Product'
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Routes, Route}from "react-router-dom"


function App() {
  return (
    
      <Router>
        <div>
        <Routes>

      <Route path="/" exact element={<Home/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/ProductList" element={<ProductList/>} />
      <Route path="/Cart" element={<Cart/>} />
      </Routes>

      </div>
      </Router>
      
  )
}

export default App
