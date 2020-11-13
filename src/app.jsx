import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

const rootElement = document.getElementById('chat');

const app = (gon) => {
  const preloadedState = {
    messages: {},
    channels: gon.channels,
  };

  /* eslint-disable*/
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(thunk),
  ));

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement,
  );
};

export default app;
