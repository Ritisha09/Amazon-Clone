import React, {useState,useEffect, useCallback, useContext}from 'react'
import "./MobileContent.css"
import MobileProduct from './MobileProduct.json'
import Rating from '@mui/material/Rating';
import { Grid, Paper } from '@mui/material';
import {Link, useParams} from "react-router-dom";
import {CartContext}  from '../Context/CartContext';

function MobileProducts(props) {

    const item= useContext(CartContext);
    const size = useContext(CartContext);
    const increment = useContext(CartContext);

    //console.log(item)
    const[productsLists, setProductLists] = useState([]);
    let {id} = useParams();

    const addToCart = function(){
         console.log("clicked")
         ///increment();
    }

    useEffect(() => {
        let mobile = MobileProduct.filter(mob => mob.id == id);
        // console.log(2) 
        console.log(mobile)
        setProductLists(mobile[0]);
    }, [])



  return (
    <div>
        <Grid container>
            <Grid item xs = {5}>
               
                <img src= {productsLists.image} alt="" className="mobileProduct_image" />
            </Grid>
            <Grid item xs = {4}>
                <div className="mobileProduct_detail">
                    <div style = {{fontSize: "24px", lineHeight: "32px", fontWeight: 500}}>
                        {productsLists.title}
                    </div>
                    <div >
                        <Rating name = "read-only" value = {productsLists?.rating || null } readOnly style = {{ fontSize: "20px"}}/>                    
                    </div> 
                    <hr></hr>
                    <div>
                        <div className="textgap">Price: <span className="mobile_price" > <b>₹</b> {productsLists.price} </span></div>
                        <div className="textgap">Free delivery: <strong> {productsLists.delivery } </strong></div>
                        <div className="textgap">EMI Starts at ₹{productsLists.EMI}. No Cost EMI available</div>
                        <div className="textgap" style = {{color: "#007600", fontSize: "20px"}}>{productsLists.status}</div>
                    </div>
                </div>
            </Grid>
            <Grid item xs = {3}>
                <Paper variant = "outlined"  className = "mobileProduct__order " style={{backgroundColor: "lightgray" ,border: "1px solid darkgrak", marginTop: "50px"}}>
                    <div>
                        <div></div>
                        
                        <button className="mobileProduct_button addToCart" onClick={addToCart}>Add to Cart</button>
                        <Link to = "/cart">
                        <button className="mobileProduct_button buyNow">Buy Now</button>
                        </Link>
                    </div>
                </Paper> 
                
            </Grid>
            
        </Grid>
    </div>
  )
}

export default MobileProducts

//onClick={addToCart}
//style = {{ fontSize: "20px"}}

{ /*
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./MobileContent.css"

function MobileProduct({image,title,price,rating}) {
  return (
    <div className="product">
        <div className="mobile_image">
            <img src= {image} height = "288px" alt="" />
        </div>
        <div className="mobile_title">
            {title}
        </div>
        <div className="mobile_rating">
            {Array(rating)
                .fill()
                .map((_,i) => (
                <StarIcon/>
            ))} 
            
        </div> 
        <div className="mobile_price">
            <b>₹</b>
            {price}
        </div> 
        <button className = "product_button"> Add to Cart</button>    
    </div> 
  )
}

export default MobileProduct
*/}