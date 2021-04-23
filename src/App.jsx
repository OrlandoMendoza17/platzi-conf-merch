import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'
import Home from './pages/Home'


const App = () => {
  const state = useInitialState()
  return (
    <AppContext.Provider value={state}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />        
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;
