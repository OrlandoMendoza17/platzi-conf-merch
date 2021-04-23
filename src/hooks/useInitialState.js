import React, {useState} from 'react';
import initialState from '../initialState'

const useInitialState = () =>{
  const [ state, setState ] = useState(initialState)
  
  const addToCart = (item) =>{
    setState({
      ...state,
      cart:[...state.cart, item]
    })
  }
  
  // const removeFromCart = () =>{
  //   setState({
  //     ...state,
  //     cart:
  //   })
  // }
  
  return {addToCart, state}
}

export default useInitialState;