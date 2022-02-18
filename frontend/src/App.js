import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';



function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  return (


    <BrowserRouter>
    
    <div className="grid-container">
          
          <header className="row">
             
              <div>
                  <Link className="brand" to="/">Papercha</Link>
              </div>

              <div>
                  <Link to="/cart">Cart 
                  {cartItems.length > 0  && ( <span className = "babge" >{cartItems.length}</span>
                  )}
                  </Link>
                  <Link to="/signin">Sign In</Link>
              </div>
          </header>
         
          <main>
          
            <Routes>
              <Route path="/cart/:id?" element={<CartScreen/>}/>
              <Route path="/product/:id" element={<ProductScreen/>} exact/>
              <Route path= "/" element={<HomeScreen/>} exact/>
            </Routes>
          
          </main>
         
    <footer className="row center">All Rights Reserved</footer>
    </div>
    
    </BrowserRouter>  
  );
}

export default App;
