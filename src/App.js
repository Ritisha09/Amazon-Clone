// import logo from './logo.svg';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, useRouteMatch, useParams} from "react-router-dom";
import './App.css';
import Checkout from './CheckoutPage/Checkout';
import ElectronicsContent from "./ElectronicsContent/ElectronicsContent";
import Header from './Header';
import Home from './Home';
import LoginPage from "./LoginPage/LoginPage";
import MobileContent from './MobileContent/MobileContent';
import File from './File';
import CartContextProvider from "./Context/CartContext";
import MobileProducts from "./MobileContent/MobileProducts";

function App(){
  return (
     
     <Router>
      <div className="App">
        {/* <Header /> */}
        {/* <File /> */}
        {/* <MobileContent/> */}
        
        {/* <MobileProducts/> */}

           <Switch>
            <Route exact path = "/mobile">
              <Header />
              <MobileContent/>
            </Route>

            <Route exact path = "/electronics">
              <Header />
              <ElectronicsContent/>
            </Route>

            <Route exact path = "/order/:id">
              <Header />
              <MobileProducts/>
            </Route>

            <Route exact path ="/cart"> 
              <Header />
              <Checkout/>
            </Route>

            <Route exact path ="/login"> 
              <LoginPage/> 
            </Route>

            <Route exact path = "">
              <Header />
              <Home />
            </Route> 
          </Switch>  
       
      </div>
    </Router>
    

  );
}

export default App;
