import React from 'react'
import Bill from '../components/Bill'

const Payment = () => {
  return (
    <main className="Payment">
      <section className="Payment__paypal">
        <h1>Pago integrado con Paypal</h1>
      </section>
      <Bill/>
    </main>
  )
}

export default Payment
