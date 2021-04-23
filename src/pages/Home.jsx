import React from 'react'
import Item from '../components/Item'
import Header from '../widgets/Header'

const Home = () => {
  return (
    <main>
      <Header/>
      <section className="item-list">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </section>
    </main>
  )
}

export default Home
