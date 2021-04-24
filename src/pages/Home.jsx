import React, {useContext} from 'react'
import Item from '../components/Item'
import AppContext from '../context/AppContext'
import Header from '../widgets/Header'

const Home = () => {
  const {state:{ products }} = useContext(AppContext)
  return (
    <main>
      <section className="item-list">
        {products.map(product =>(
          <Item {...product} key={product.id}/>
        ))}
      </section>
    </main>
  )
}

export default Home
