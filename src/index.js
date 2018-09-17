import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App'; 
// import {loadCourses} from './actions/courseActions';
// import {loadAuthors} from './actions/authorActions';

const store = configureStore();

// Dispatch actions to load initial state.
/* store.dispatch(loadCourses());
store.dispatch(loadAuthors()); */

render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('app'));