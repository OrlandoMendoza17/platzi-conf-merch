import React from 'react'

const ListItem = (product) => {
  const {title, price, count, image} = product;
  return (
    <div className="ListItem">
      <figure className="ListItem__cover">
        <img className="ListItem__cover--image" src={image} alt=""/>
      </figure>
      <div className="ListItem__details">
        <h4 className="ListItem__details--title">{title}</h4>
        <span className="ListItem__details--price">{count} {count !== 1? 'unidades' : 'unidad'}</span>
      </div>
      <h5 className="ListItem__total-price">
        {price * count}$
      </h5>
    </div>
  )
}

export default ListItem
