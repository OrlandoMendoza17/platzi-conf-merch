import React, {useContext} from 'react'
import Bill from '../components/Bill'
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import {totalPrice} from '../utils/totalPrice';
import {Redirect} from 'react-router';

const Payment = () => {
  const {state, addOrder} = useContext(AppContext);
  const {cart, buyer} = state;
  console.log(buyer)

  const paypalOptions = {
    // clientId: 'Ae7cFZ22uwlDYvOi9UK7CA3-Bx7VjKXJ3tnUVCX00UuapMrb2-OZZejjTtnFqe5csuj3AYxgKs3HWSo0',
    clientId: 'Ae7cFZ22uwlDYvOi9UK7CA3-Bx7VjKXJ3tnUVCX00UuapMrb2-OZZejjTtnFqe5csuj3AYxgKs3HWSo0',
    intent: 'capture',
    currency: 'USD'
  }
  
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }
  
  const handlePaymentSuccess = (data) =>{
    if (data.status === 'COMPLETED') {
      addOrder({
        buyer,
        products: cart,
        payment: data
      })
    } 
  }
  
  if(Object.keys(buyer).length && cart.length){
    return (
      <main className="Payment">
        <section className="Payment__paypal">
          <h1>Pago integrado con Paypal</h1>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={totalPrice(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={error => console.log('Payment Error', error)}
            onPaymentCancel={data => console.log('Payment Cancel', data)}
          />
        </section>
        <Bill/>
      </main>
    )
  }

  return <Redirect to="/"/>
  
}

export default Payment
