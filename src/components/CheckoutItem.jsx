import React, {useContext} from 'react'
import Button from '../widgets/Button';
import AppContext from '../context/AppContext';

const CheckoutItem = (product) => {
  const {title, price, count, image} = product;
  const {increaseCount, decreaseCount} = useContext(AppContext)
  
  const handleIncreaseCount = () =>{
    increaseCount(product)
  }
  const handleDecreaseCount = () =>{
    decreaseCount(product)
  }
  
  return (
    <div className="CheckoutItem">
      <figure className="CheckoutItem__cover">
        <img width="60" className="CheckoutItem__cover--image" src={image} alt=""/>
      </figure>
      <div className="CheckoutItem__details">
        <h4 className="CheckoutItem__details--title">{title}</h4>
        <span className="CheckoutItem__details--price">{price}$ x {count} {count !== 1? 'unidades' : 'unidad'}</span>
      </div>
      <div className="CheckoutItem__count">
        <Button handleClick={handleIncreaseCount}>Subir</Button>
        <span>{count}</span>
        <Button handleClick={handleDecreaseCount}>Bajar</Button>
      </div>
    </div>
  )
}

export default CheckoutItem