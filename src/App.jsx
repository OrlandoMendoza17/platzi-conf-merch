import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Information from './pages/Information';
import NotFound from './pages/NotFound';
import Payment from './pages/Payment';

const App = () => {
  const state = useInitialState()
  return (
    <AppContext.Provider value={state}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/information" component={Information} />
            <Route exact path="/payment" component={Payment} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;
