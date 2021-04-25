import React, {useContext} from 'react'
// import ReactDOM from 'react-dom';
import Bill from '../components/Bill'
import AppContext from '../context/AppContext';
import {totalPrice} from '../utils/totalPrice';
import {Redirect} from 'react-router';
import { PayPalButton } from 'react-paypal-button-v2';

// import { PayPalButton } from 'react-paypal-button';

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

const Payment = () => {
  const {state, addOrder} = useContext(AppContext);
  const {cart, buyer} = state;
  console.log(buyer)

  const options = {
    clientId: "AUcXiI2laOs-B9OpOYZN7gt08mwfZY67zJTbDjW3WpTBqmh0kBhIdjMgsIhGJQLcLuvEGrc4s1jFzQNJ",
  }
  
  const handlePaymentSuccess = (details, data) =>{
    alert("Transaction completed by " + details.payer.name.given_name);
    debugger
    if (details.status === 'COMPLETED') {
      addOrder({
        buyer,
        products: cart,
        payment: {data, details}
      })
      alert('El pago se ha realizado exitosamente')
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
