import React, {useContext} from 'react'
import Button from '../widgets/Button';
import AppContext from '../context/AppContext';
import ArrowUp from '../components/icons/ArrowUp';

const CheckoutItem = (product) => {
  const {title, price, count, image} = product;
  const {increaseCount, decreaseCount, removeFromCart} = useContext(AppContext)
  
  const handleIncreaseCount = () =>{
    increaseCount(product)
  }
  const handleDecreaseCount = () =>{
    if (product.count !== 1) {
      decreaseCount(product)
    }else{
      removeFromCart(product)
    }
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
        <Button handleClick={handleIncreaseCount}>
          <ArrowUp className="CheckoutItem__count--icon-up"/>
        </Button>
        <Button handleClick={handleDecreaseCount}>
          <ArrowUp className="CheckoutItem__count--icon-down"/>
        </Button>
      </div>
    </div>
  )
}

export default CheckoutItem
