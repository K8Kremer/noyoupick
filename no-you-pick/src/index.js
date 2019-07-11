import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import promise from 'redux-promise';

import VotePage from './components/VotePage';
import FinalResult from './components/FinalResult';

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  //<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/votePage' component={VotePage} />
        <Route exact path='/finalResult' component={FinalResult} />
        <Redirect from='/' to='/votePage' />
      </Switch>
    </BrowserRouter>
  //</Provider>,
  ,document.getElementById('root')
);