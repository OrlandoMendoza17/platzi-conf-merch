import React, {useState} from 'react';
import initialState from '../initialState'
import {getState, saveState} from '../utils/storageState';

const savedState = getState()

const useInitialState = () =>{
  const stateToUse = savedState? savedState : initialState
  const [ state, setState ] = useState(stateToUse)
  
  const addToCart = (item) =>{
    const product = { ...item, count: 1 }
    
    const newState = {
      ...state, cart:[...state.cart, product]
    }
    setState(newState)
    saveState(newState)
  }
  
  const increaseCount = (item) =>{
    debugger
    const product = {...item, count: item.count+1}
    const newState = {
      ...state, 
      cart: state.cart.map((item)=>{
        return item.id === product.id ? product : item
      })
    }
    setState(newState)
    saveState(newState)
  }
  const decreaseCount = (item) =>{
    const product = {...item, count: item.count > 1  ? item.count-1 : item.count}
    const newState = {
      ...state, 
      cart: state.cart.map((item)=>{
        return item.id === product.id ? product : item
      })
    }
    setState(newState)
    saveState(newState)
  }
  
  const removeFromCart = (item) =>{
    const newState = {
      ...state,
      cart: state.cart.filter(product => product.id !== item.id)
    }
    setState(newState)
    saveState(newState)
  }
  
  return {
    state,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
  }
}

export default useInitialState;