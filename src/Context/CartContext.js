import React, { createContext, Component } from 'react'
import MobileProduct from '../MobileContent/MobileProduct.json'

export const CartContext = createContext();

let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
let cart_size = existingCart.length;

class CartContextProvider extends Component{
   

    state = {
        item: MobileProduct,
        item_cart: existingCart,
        //totalAmount : 0,
        //totalItem: cart_size,
    }

    removeFromCart = (product_id) => {
        console.log(product_id)
        //let item_list = this.state.item_cart;
        let item_arr = this.state.item_cart.filter(mobile => mobile.id != product_id)
        
        console.log(item_arr)
        this.setState( {item_cart: item_arr});
        this.setState( {totalItem: this.state.item_cart.length})

        //this.saveToLocalCache();
        console.log('cart product', this.state.item_cart);
     }

    addToCart = (product) => {
        let itemList = this.state.item_cart;
        itemList.push(product)

        this.setState( {item_cart: itemList});
        this.setState( {totalItem: this.state.item_cart.length})

        this.saveToLocalCache();
        console.log('cart product', this.state.item_cart);
    };

    totalAmount = () => {
        let price = 0;
        for (let i = 0; i< this.state.item_cart.length ; i++){
            price += parseInt(this.state.item_cart[i].price);
        }
        this.saveToLocalCache();
        return price;
    }

    
    totalItem = () => {
        let size = this.state.item_cart.length;
        this.saveToLocalCache();
        return size;
    }

     emptyCart = () => {
        //let item_list = this.state.item_cart;
        let item_list = [];
        this.setState ( {item_cart: item_list});
        this.setState( {totalItem: this.state.item_cart.length})

        this.saveToLocalCache();
        console.log('cart product', this.state.item_cart);
     
     }

     saveToLocalCache = () => {
        localStorage.setItem('myCart', JSON.stringify(this.state.item_cart))
    };


    render() {
        return(
            <CartContext.Provider 
                value= {{
                    item: this.state.item,
                    totalItem: this.totalItem,
                    item_cart: this.state.item_cart,
                    addToCart: this.addToCart,
                    totalAmount: this.totalAmount,
                    removeFromCart: this.removeFromCart,
                    emptyCart: this.emptyCart

                }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartContextProvider;

