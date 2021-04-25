import React, {useContext} from 'react';
import {Redirect} from 'react-router';
import GoogleMaps from '../components/GoogleMaps';
import MoneyCheck from '../components/icons/MoneyCheck';
import AppContext from '../context/AppContext';

const Success = () => {
  const {state:{ cart, buyer, orders }} = useContext(AppContext)
  
  debugger
  
  if(!cart.length && 
      !Object.keys(buyer).length && 
        orders.length > 0){
    return (
      <main className="Success">
        <section className="Success__notification">
          <MoneyCheck className="Success__notification--icon"/>
          <h1 className="Success__notification--title">Gracias Por su compra</h1>
          <p className="Success__notification--message">Su pedido llegará a su dirección en 3 días</p>
        </section>
        <section className="Success__map">
          <GoogleMaps/>
        </section>
      </main>
    )
  }

  return <Redirect to="/" />
  
}

export default Success;
