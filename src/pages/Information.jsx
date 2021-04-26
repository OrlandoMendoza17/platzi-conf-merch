import React, {useContext} from 'react'
import {Redirect} from 'react-router';
import Bill from '../components/Bill';
import ContactInformationForm from '../components/ContactInformationForm';
import AppContext from '../context/AppContext';

const Information = () => {
  const {state:{cart}} = useContext(AppContext)
  
  if(cart.length){
    return (
      <main className="Information">
        <section className="Information__contact">
          <h1 className="Information__contact--title">Información de Contacto:</h1>
          <ContactInformationForm/>
        </section>
        <Bill/>
      </main>
    )
  }
  return <Redirect to="/" />
}

export default Information;