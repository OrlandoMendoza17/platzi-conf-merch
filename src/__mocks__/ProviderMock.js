import React from 'react';
import AppContext from '../context/AppContext';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';

const history = createBrowserHistory()

const ProviderMock = (props) =>{
  const state = useInitialState()
  return(
    <AppContext.Provider value={state}>
      <Router history={history}>
        {props.children}
      </Router>
    </AppContext.Provider>
  )
}

export default ProviderMock;