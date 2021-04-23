import React from 'react';
import xbox from '../assets/images/D_NQ_NP_635076-MLV42914357875_072020-W.webp';
import Heart from './icons/Heart';

const Item = () => {
  return (
    <div className="Item">
      <figure className="Item__cover">
        <img className="Item__cover--image" src={xbox} alt=""/>
      </figure>
      <div className="Item__addToCart">
        <Heart className="Item__addToCart--icon"/>
      </div>
      <div className="Item__details">
        <span className="Item__details--price">USD 200$</span>
        <h4 className="Item__details--title">Consola Xbox One Fat 500gb Con Kinect 1 Juego</h4>
        <p className="Item__details--state">Nuevo</p>
      </div>
    </div>
  )
}

export default Item;
