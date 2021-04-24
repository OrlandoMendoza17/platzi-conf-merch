import React, {useContext} from 'react'
import ContactInformationForm from '../components/ContactInformationForm';
import ListItem from '../components/ListItem';
import AppContext from '../context/AppContext';
import {totalPrice} from '../utils/totalPrice';

const Information = () => {
  const {state:{cart}} = useContext(AppContext)
  return (
    <main className="Information">
      <section className="Information__contact">
        <h1>Información de Contacto:</h1>
        <ContactInformationForm/>
      </section>
      <aside className="Information__bill">
        <h2 className="Information__bill--title">Pedido</h2>
        <div className="Information__bill--items">
          {cart.map(item=>(
            <ListItem {...item} key={item.id}/>
          ))}
        </div>
        <h3 className="Information__bill--price">
          {`Precio Total: ${totalPrice(cart)}$`}
        </h3>
      </aside>
    </main>
  )
}

export default Information;