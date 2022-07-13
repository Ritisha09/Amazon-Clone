import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import "./MobileContent.css"
//import MobileProduct from './MobileProduct.json'

function MobileContent() {
  
 
  return (
    <div style = {{display: "flex"}} className = "Mobile_Content">
      <div>
           <LeftSide/>
        </div>
        <div>
            <RightSide  />
        </div>
    </div>
  )
}

export default MobileContent
