import React, {useState, useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import Heart from './icons/Heart';

const Product = ({product}) => {
  const {title, image, price, used} = product;
  const {addToCart, removeFromCart, state:{cart}} = useContext(AppContext)
  const [favorite, setFavorite] = useState(false)
  
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
    <div className="Product">
      <figure className="Product__cover">
        <img className="Product__cover--image" src={image} alt={`${title} image`}/>
      </figure>
      <button onClick={handleClick} className={`Product__addToCart ${favorite? 'selected' : ''}`}>
        <Heart className="Product__addToCart--icon"/>
      </button>
      <div className="Product__details">
        <span className="Product__details--price">USD {price}$</span>
        <h4 className="Product__details--title">{title}</h4>
        <p className="Product__details--state">{used? 'Usado':'Nuevo'}</p>
      </div>
    </div>
  )
}

export default Product;
