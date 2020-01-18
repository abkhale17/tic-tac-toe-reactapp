
import React from 'react'
import './index.css';

function Square(props){
  const {squares,id,handleClick,butnDisable} = props
  return (
        <button 
          disabled={butnDisable[id]}
          onClick = { () => handleClick(id) }
          className = "square"
         > 
          {squares[id]}
        </button>
  )
}


export default Square