// @ts-check
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import gon from 'gon';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
import app from './app';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const preloadedState = {
  messages: '',
  channels: gon.channels,
};

/* eslint-disable*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(rootReducer, preloadedState, composeEnhancers(
  applyMiddleware(thunk),
));

app(store);
console.log('it works!');
console.log('gon', gon);
