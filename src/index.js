import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';   


import "../src/input.css";



import { Home, Product, Products, AboutPage, ContactPage, Cart,  Register, Checkout, PageNotFound, ContactUs } from "./pages"
import Signup from './components/signup';
import Login from './components/login';
import UpdateProduct from './Update';


 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
  
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/aboutpage" element={<AboutPage/>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} /> 
        <Route path="/product/*" element={<PageNotFound />} />
        <Route path='/update' element={<UpdateProduct/>} />
     
      </Routes>
    </Provider>
  </BrowserRouter>
  
);