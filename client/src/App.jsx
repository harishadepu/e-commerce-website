import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';
import menBanner from './Assets/banner_mens.png'
import kidsBanner from './Assets/banner_kids.png'
import womenBanner from './Assets/banner_women.png'

const App = () => {
  const token = localStorage.getItem('auth-token');
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={ token ?  <Shop/> : <LoginSignup/>}/>
      <Route path="/men" element={ token ? <ShopCategory banner={menBanner} category="men" /> : <LoginSignup/>}/>
      <Route path="/kids" element={token ?<ShopCategory banner={kidsBanner} category="kid"/> : <LoginSignup/>}/>
      <Route path="/women" element={token ? <ShopCategory banner={womenBanner} category="women"/> : <LoginSignup/>}/>
      <Route path="/product/:productId" element={<Product />}/>
          
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App



