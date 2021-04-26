import React, {useContext} from 'react'
import Bill from '../components/Bill'
import AppContext from '../context/AppContext';
import {totalPrice} from '../utils/totalPrice';
import {Redirect, useHistory} from 'react-router';
import { PayPalButton } from 'react-paypal-button-v2';

const Payment = () => {
  const {state, addOrder} = useContext(AppContext);
  const {cart, buyer} = state;
  const history = useHistory()
  
  const options = {
    clientId: process.env.clientId,
  }
  
  const handlePaymentSuccess = (details, data) =>{
    if (details.status === 'COMPLETED') {
      addOrder({
        buyer,
        products: cart,
        payment: {data, details}
      })
      history.push('/success')
    }else{
      alert('Ha ocurrido un error con el pago')
    }
  }
  
  if(Object.keys(buyer).length && cart.length){
    return (
      <main className="Payment">
        <section className="Payment__paypal">
          <h1>Pago integrado con Paypal</h1>
          <PayPalButton
            amount={totalPrice(cart)}
            onSuccess={(details, data) => handlePaymentSuccess(details, data)}
            options={options}
          />
        </section>
        <Bill/>
      </main>
    )
  }

  return <Redirect to="/"/>
  
}

export default Payment
