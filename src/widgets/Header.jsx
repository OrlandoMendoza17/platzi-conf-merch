import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import brand_image from '../assets/images/brand-image.png'
import Cart from '../components/icons/Cart'
import AppContext from '../context/AppContext'

const Header = () => {
  const {state:{cart}} = useContext(AppContext)
  return (
    <header className="Header">
      <figure className="Header__brand-icon">
        <Link to="/">
          <img className="Header__brand-icon--image" src={brand_image} alt=""/>
        </Link>
      </figure>
      <Link to="/checkout" className="Header__cart">
        <Cart className="Header__cart--icon"/>
        {cart.length? cart.length : ''}
      </Link>
    </header>
  )
}

export default Header;
