import React from 'react';
import GoogleMaps from '../components/GoogleMaps';

const Success = () => {
  return (
    <main className="Success">
      <section>
        <h1 className="Success__title">Gracias Por su compra</h1>
        <p className="Success__message">Su pedido llegará a su dirección en 3 días</p>
        <GoogleMaps/>
      </section>
    </main>
  )
}

export default Success;
