import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import CheckoutItem from '../components/CheckoutItem'
import AppContext from '../context/AppContext'
import Button from '../widgets/Button'

const Checkout = () => {
  const {state:{ cart }} = useContext(AppContext)
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
            <span>Precio Total:</span>
            <span>{cart.reduce((accumulator, item) => accumulator + (item.price * item.count), 0)}$</span>
          </h3>
          <Link to="/checkout/information">
            <Button>
              Continuar Pedido
            </Button>
          </Link>
        </aside>
      </main>
    </>
  )
}

export default Checkout