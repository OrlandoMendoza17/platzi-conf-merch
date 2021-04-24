import React from 'react'

const Button = ({handleClick, disabled, children}) => {
  return (
    <button 
      className="Button"
      disabled={disabled}
      onClick={handleClick} 
    >
      {children}
    </button>
  )
}

export default Button
