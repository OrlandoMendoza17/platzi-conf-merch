import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import CheckoutItem from '../components/CheckoutItem'
import AppContext from '../context/AppContext'
import {totalPrice} from '../utils/totalPrice'
import Button from '../widgets/Button'

const Checkout = () => {
  const {state:{ cart }} = useContext(AppContext)
  const history = useHistory()
  console.log(history)
  
  const advanceWithPurchase = () => {
    if (cart.length > 0) {
      history.push("/information")
    }else{
      alert('No tienes nada en el carrito')
    }
  }
  
  return (
    <>
      <main className="Checkout">
        <section className="Checkout__list">
          {cart.length === 0 && <h2>No hay items en el carrito</h2>}
          {cart.map(product =>(
            <CheckoutItem {...product} key={product.id}/>
          ))} 
        </section>
        <aside className="Checkout__bill">
          <h3>
            <span>{`Precio Total: ${totalPrice(cart)}$`}</span>
          </h3>
          <Button handleClick={advanceWithPurchase}>
            Continuar Pedido
          </Button>
        </aside>
      </main>
    </>
  )
}

export default Checkout