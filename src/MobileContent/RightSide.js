import React from 'react'
import "./MobileContent.css"
// import MobileProduct from './MobileProduct'
import MobileProduct from './MobileProduct.json'
import Rating from '@mui/material/Rating';
// import { CartContext } from '../Context/CartContext';
import {Link} from "react-router-dom";


function RightSide() {

 
  // console.log(mobileData)

  return (
    <div className = "Right_Side">
      
       {
        MobileProduct.map(MobileProduct => {
          return(

            <Link to = {'/order/' + MobileProduct.id} >
            <div key = {MobileProduct.id} className = "mobileProduct">
                <div className="mobile_image">
                    <img src= {MobileProduct.image} height = "288px" alt="" />
                </div>
                <div className="mobile_title">
                    {MobileProduct.title}
                </div>
                <div className="mobile_rating">
                  <Rating name = "read-only" value = {MobileProduct.rating} readOnly />                    
                </div> 
                <div className="mobile_price">
                    <b>₹</b>
                    {MobileProduct.price}
                </div> 
                {/* <button className = "product_button"> Add to Cart</button>  */}
            </div>
            </Link>

          )
        })
      } 
      
    </div>
  )
}

export default RightSide
