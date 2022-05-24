import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Provider}from "react-redux"

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

import configureStore from "./redux/store/redux_store";
const reduxstore=configureStore();


const App=()=>{
  return(
    <Provider store={reduxstore}>
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
    </Provider>
     
  )
}
export default App;
