import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, NavLink } from "react-router-dom";


function Header() {
  return (
    <>
    
    {/* header component */}
    <div className = 'header'>
        
        {/* 1.  amazon-logo
        2. search input field
        3. children  */}
        
        {/* Amazon logo  */}
        <Link to = "">
            <img className ="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>

        {/* search component */}
        <div className="header_Search">
            <input type="text" className="header_SearchInput"  />
            {/* logo */}
            <SearchIcon className="header_searchIcon"/>
        </div>

        <div className="header_nav">
            <Link  to = "/login"> 
            <div className="header_option">
                <span className="header_optionLineOne">
                    Hello Guest
                </span>
                <span className="header_optionLineTwo">
                    Sign In
                </span>
            </div>
            </Link>

            <div className="header_option">
            <span className="header_optionLineOne">
                    Returns
                </span>
                <span className="header_optionLineTwo"> & Orders
                </span>
            </div>

            <div className="header_option">
            <span className="header_optionLineOne">
                    Your
                </span>
                <span className="header_optionLineTwo">
                    Prime
                </span>
            </div>

            <div className="header_bakset">
                <Link to = "/cart">
                    <AddShoppingCartIcon />
                </Link>
                  </div>

            <div className="header_basketItem">
                <span className="header_optionLineOne">Cart</span>
                <span className="header_optionLineTwo header_basketCount">0</span>
            </div>
        </div>
    </div>

    <div className="header_bottom">
        <ul >
            
            <Link to ="/mobile" >
                <li>Mobile</li>
            </Link>

            <Link to ="/electronics" >
                <li>Electronics</li>
            </Link>
            
            <li>Clothes</li>
            <li>Footwear</li>
            <li><img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/FT_SWM_400x39_211._CB623007921_.jpg" alt="" /></li> 
        </ul>
    </div>
    </>
  )
}

export default Header
