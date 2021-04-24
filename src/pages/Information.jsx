import React from 'react'
import Bill from '../components/Bill';
import ContactInformationForm from '../components/ContactInformationForm';

const Information = () => {
  
  return (
    <main className="Information">
      <section className="Information__contact">
        <h1>Información de Contacto:</h1>
        <ContactInformationForm/>
      </section>
      <Bill/>
    </main>
  )
}

export default Information;