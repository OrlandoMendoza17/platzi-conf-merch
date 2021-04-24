import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  const state = useInitialState()
  return (
    <AppContext.Provider value={state}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;
