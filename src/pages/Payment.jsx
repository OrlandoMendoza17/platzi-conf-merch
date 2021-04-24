import React, {useContext} from 'react'
import Bill from '../components/Bill'
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import {totalPrice} from '../utils/totalPrice';

const Payment = () => {
  const {state:{cart}} = useContext(AppContext)
  
  const paypalOptions = {
    clientId: 'Ae7cFZ22uwlDYvOi9UK7CA3-Bx7VjKXJ3tnUVCX00UuapMrb2-OZZejjTtnFqe5csuj3AYxgKs3HWSo0',
    intent: 'capture'
  }
  
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }
  
  return (
    <main className="Payment">
      <section className="Payment__paypal">
        <h1>Pago integrado con Paypal</h1>
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={totalPrice(cart)}
          onPaymentStart={() => console.log('Start Payment')}
          onPaymentSuccess={data => console.log('Payment Success', data)}
          onPaymentError={error => console.log('Payment Error', error)}
          onPaymentCancel={data => console.log('Payment Cancel', data)}
        />
      </section>
      <Bill/>
    </main>
  )
}

export default Payment
