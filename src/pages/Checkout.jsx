import React, {useContext} from 'react'
import CheckoutItem from '../components/CheckoutItem'
import AppContext from '../context/AppContext'

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
          
        </aside>
      </main>
    </>
  )
}

export default Checkout