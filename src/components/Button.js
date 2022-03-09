import React, { useState } from 'react'

const Button = (props) => {
    const [numberOfClick, setnumberOfClick] = useState(0)

  const handleClick=()=>{
     setnumberOfClick(numberOfClick + 1)
     props.handleButtonTotalClick()
  }

  
  return(
        <>
         <button onClick={handleClick}>{props.title}</button>
         {numberOfClick}
        </>
        ) 
      
      
 
}

export default Button