import React, { useState,useEffect, useCallback } from 'react'
import MobileProduct from './MobileContent/MobileProduct.json'

function File(props) {

    const[productsLists, setProductLists] = useState([])
    
    useEffect(() => {

        // let list = [  {
        //     "id": 1234561,
        //     "image": "https://m.media-amazon.com/images/I/716FVMg72GS._AC_UL320_.jpg",
        //     "title" : "Mi 11X Pro 5G (Cosmic Black, 8GB RAM, 128GB Storage) | Snapdragon 888 | 108MP Camera |",
        //     "rating": 3,
        //     "price": "34,999"
        // },
        // {
        //     "id": 1234562,
        //     "image": "https://m.media-amazon.com/images/I/81QVLzeVckL._AC_UY218_.jpg",
        //     "title": "Samsung Galaxy S20 FE 5G (Cloud Lavender, 8GB RAM, 128GB Storage) ",
        //     "rating": 4,
        //     "price": "36,990"
        // }]

        
        // let ll = JSON.stringify(list, [0,0])
        let result = MobileProduct.filter(mob => mob.id == 1234561);
        console.log(2) 
        console.log(result)
         setProductLists(result[0]);


        // let mob = list.filter(mob =>  {
        //     if(mob.id == 1234561)
        //         return mob;
            
        // })

    // setProductLists(mob[0]);
    // console.log(mob);
     }, [])

    // console.log(MobileProduct.mobile[0])

    // const map = MobileProduct.map(Mobile,1)
    // console.log(map)

    // const[productsLists, setProductLists] = useState()
    // const mobileData = require('./MobileContent/MobileProduct.json')
    // console.log(mobileData[0].id)
    //setProductLists(mobileData)
    //console.log(productsLists)

    // useEffect(() => {
    //     let list = MobileProduct
    //     setProductLists(list)
 
    // })



    // const[productsLists, setProductLists] = useState()
    // setProductLists(MobileProduct)

    // const[cart,setCart] = useState()
    // const addToCart = async(mobId, qty) => {
    //    const response = await MobileProduct.add(mobId,qty)
    //    console.log(response)
    // }
    
    // const displayData = require('./MobileContent/MobileProduct.json')
    // console.log(displayData)



    // async function pullJson() {
    //     console.log(MobileProduct)
    //     displayData = MobileProduct.map(function(todo) {
    //         return(
    //             <p key = {todo.id}>{todo.title}</p>
    //         )
    //     })
    //     setProductLists(displayData)
    // }

    // useEffect(() => {
    //     pullJson()
    // },[])

    return (
        <div>
           
            {/* <p> {productsLists} </p> */}

            {productsLists.title}
        </div>
    )
}

export default File
