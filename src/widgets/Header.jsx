import React, {useState, useContext} from 'react'
import brand_image from '../assets/images/brand-image.png'
import Cart from '../components/icons/Cart'
import AppContext from '../context/AppContext'

const Header = () => {
  const {state:{cart}} = useContext(AppContext)
  return (
    <header className="Header">
      <figure className="Header__brand-icon">
        <img className="Header__brand-icon--image" src={brand_image} alt=""/>
      </figure>
      <button className="Header__cart">
        <Cart className="Header__cart--icon"/>
        {cart.length? cart.length : ''}
      </button>
    </header>
  )
}

export default Header;
