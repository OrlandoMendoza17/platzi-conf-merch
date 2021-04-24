import React, {useState, useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import Heart from './icons/Heart';

const Item = (product) => {
  const {title, image, price, used} = product
  const {addToCart, removeFromCart, state:{cart}} = useContext(AppContext)
  const [favorite, setFavorite] = useState(false)
  console.log(cart)
  
  useEffect(() => {
    const isFavorite = !!cart.find(item => item.id === product.id)
    setFavorite(isFavorite)
  }, [])
  
  const handleClick = () =>{
    setFavorite(!favorite)
    if(!favorite){
      addToCart(product)
    }else{
      removeFromCart(product)
    }
  }
  
  return (
    <div className="Item">
      <figure className="Item__cover">
        <img className="Item__cover--image" src={image} alt={`${title} image`}/>
      </figure>
      <button onClick={handleClick} className={`Item__addToCart ${favorite? 'selected' : ''}`}>
        <Heart className="Item__addToCart--icon"/>
      </button>
      <div className="Item__details">
        <span className="Item__details--price">USD {price}$</span>
        <h4 className="Item__details--title">{title}</h4>
        <p className="Item__details--state">{used? 'Usado':'Nuevo'}</p>
      </div>
    </div>
  )
}

export default Item;
