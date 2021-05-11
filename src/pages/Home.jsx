import React, {useContext} from 'react';
import Product from '../components/Product';
import AppContext from '../context/AppContext';

const Home = () => {
  const {state:{ products }} = useContext(AppContext)
  return (
    <main>
      <section className="item-list">
        {products.map(product =>(
          <Product product={product} key={product.id}/>
        ))}
      </section>
    </main>
  )
}

export default Home;
