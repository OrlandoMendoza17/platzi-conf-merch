import React, {useState} from 'react';
import initialState from '../initialState'
import {getState, saveState} from '../utils/storageState';

const savedState = getState()

const useInitialState = () =>{
  const stateToUse = savedState? savedState : initialState;
  const [ state, setState ] = useState(stateToUse)
  
  const setAndSave = (state) =>{
    setState(state)
    saveState(state)
  } 
  
  const addToCart = (item) =>{
    const product = { ...item, count: 1 }
    setAndSave({
      ...state, cart:[...state.cart, product]
    })
  }
  
  const addBuyer = (buyer) =>{
    setAndSave({
      ...state, buyer
    })
  }
  
  const addOrder = (order) =>{
    debugger
    setAndSave({
      ...state,
      buyer: {}, 
      cart:[],
      orders: [...state.orders, order]
    })
  }
  
  const increaseCount = (item) =>{
    const product = {...item, count: item.count+1}
    setAndSave({
      ...state, 
      cart: state.cart.map(item => item.id === product.id ? product : item)
    })
  }
  
  const decreaseCount = (item) =>{
    const product = {...item, count: (item.count > 1)? item.count-1 : item.count}
    setAndSave({
      ...state, 
      cart: state.cart.map(item => item.id === product.id ? product : item)
    })
  }
  
  const removeFromCart = (item) =>{
    setAndSave({
      ...state,
      cart: state.cart.filter(product => product.id !== item.id)
    })
  }
  
  return {
    state,
    addToCart,
    addBuyer,
    addOrder,
    removeFromCart,
    increaseCount,
    decreaseCount,
  }
}

export default useInitialState;