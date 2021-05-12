import React, {useContext} from 'react';
import ListItem from '../components/ListItem';
import AppContext from '../context/AppContext';
import {totalPrice} from '../utils/totalPrice';

const Bill = () => {
  const {state:{cart}} = useContext(AppContext)
  return (
    <aside className="Bill">
      <h2 className="Bill--title">Pedido</h2>
      <div className="Bill--items">
        {cart.map(product=>(
          <ListItem product={product} key={product.id}/>
        ))}
      </div>
      <h3 className="Bill--price">
        {`Precio Total: ${totalPrice(cart)}$`}
      </h3>
    </aside>
  )
}

export default Bill
