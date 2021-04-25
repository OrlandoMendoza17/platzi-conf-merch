import React from 'react'

const Button = ({color, handleClick, disabled, children}) => {
  return (
    <button 
      className={`Button ${color? color : ''}`}
      disabled={disabled}
      onClick={handleClick} 
    >
      {children}
    </button>
  )
}

export default Button
