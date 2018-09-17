import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import HomePage from './home/Homepage';
import CartPage from './cart/CartPage';

const App = () => (
  <div className="app">
    <Routes />
  </div>
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={CartPage} />
  </Switch>
);

export default App;
