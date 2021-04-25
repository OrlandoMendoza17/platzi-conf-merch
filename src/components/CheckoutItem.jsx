import React, {useState, useContext} from 'react'
import Button from '../widgets/Button';
import AppContext from '../context/AppContext';
import ArrowUp from '../components/icons/ArrowUp';
import Modal from '../widgets/Modal';

const CheckoutItem = (product) => {
  const {title, price, count, image} = product;
  const [warning, setWarning] = useState(false)
  const {increaseCount, decreaseCount, removeFromCart} = useContext(AppContext)
  
  const handleIncreaseCount = () =>{
    increaseCount(product)
  }
  const handleDecreaseCount = () =>{
    if (product.count !== 1) {
      decreaseCount(product)
    }else{
      setWarning(true) 
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
      {warning &&
        <Modal 
          size="small"
          handleButton1={()=> setWarning(false)}
          handleButton2={()=> removeFromCart(product)}
          message="¿Estás seguro que quieres eliminar este item?"
        />
      }
    </div>
  )
}

export default CheckoutItem
