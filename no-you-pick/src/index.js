import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import promise from 'redux-promise';

import VotePage from './components/VotePage';
import FinalResult from './components/FinalResult';

import 'bootstrap/dist/css/bootstrap.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//instead of usual App component, just put a Switch directly in BrowserRouter
//  since App would only contain the Switch and Routes
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/votePage' component={VotePage} />
        <Route exact path='/finalResult' component={FinalResult} />
        <Redirect from='/' to='/votePage' />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
