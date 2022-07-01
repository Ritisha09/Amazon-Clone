import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
function Checkout() {
  return (
    <div className = "checkout">
            <div className="checkout_left">
                <img className = " checkout_add" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/2022/LP_revamp/apparel/pc_oupons.jpg" alt="" height ="170px"/>

                <div>
                    <h2 className="checkout_title">
                        Your Shopping Cart
                    </h2>

                    {/* <CheckoutItems/> */}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
    </div>
  )
}

export default Checkout
// https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/FDFO/1080x140.jpg
