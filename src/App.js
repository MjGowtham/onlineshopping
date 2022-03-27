import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import SingleProduct from "./pages/singleproduct";
import CartPage from "./pages/cart";
import CheckOut from "./pages/checkout";

import HeaderComponent from "./component/header";

import "./css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";


const App=()=>{
  return(
     <BrowserRouter>
     <HeaderComponent></HeaderComponent>
     <Routes>
       <Route path="/" element={<HomePage/>}></Route>
       <Route path="products" element={<ShopPage/>}></Route>
       <Route path="singleproduct" element={<SingleProduct/>}></Route>
       <Route path="cart" element={<CartPage/>}></Route>
       <Route path="checkout" element={<CheckOut/>}></Route>
     </Routes>
     </BrowserRouter>
  )
}
export default App;
