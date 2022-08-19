import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './Components/Theme';
import Header from './Components/Header';
import { Router } from "@reach/router";
import { useCart } from 'react-use-cart';
//import {Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductList from "./Components/ProductList";
import CreateProduct from "./Components/CreateProduct";
import ViewProduct from "./Components/ViewProduct";


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header />
      <Router>
        <Home path="/" />
        <Cart path="/cart" />
     
      </Router>
    </main>
  );
}

export default App;