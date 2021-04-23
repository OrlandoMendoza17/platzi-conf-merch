import React, {useState, useContext} from 'react';
import AppContext from '../context/AppContext';
import Heart from './icons/Heart';

const Item = () => {
  const {addToCart} = useContext(AppContext)
  const [favorite, setFavorite] = useState(false)
  
  const handleClick = () =>{
    setFavorite(!favorite)
    // addToCart()
  }
  
  return (
    <div className="Item">
      <figure className="Item__cover">
        <img className="Item__cover--image" src="https://http2.mlstatic.com/D_NQ_NP_777450-MLV44848960511_022021-W.webp" alt=""/>
      </figure>
      <button onClick={handleClick} className={`Item__addToCart ${favorite? 'selected' : ''}`}>
        <Heart className="Item__addToCart--icon"/>
      </button>
      <div className="Item__details">
        <span className="Item__details--price">USD 200$</span>
        <h4 className="Item__details--title">Consola Xbox One Fat 500gb Con Kinect 1 Juego</h4>
        <p className="Item__details--state">Nuevo</p>
      </div>
    </div>
  )
}

export default Item;
