import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import UserDataContext from './components/Context';
import rootReducer from './reducers';
import App from './components/App';
import './scss/style.scss';
import randomColor from './colors';
import socket from './socket';
import { addMessage } from './actions';

const rootElement = document.getElementById('chat');

const app = (gon, faker, cookies) => {
  if (!cookies.get('userName')) {
    const randomName = faker.name.findName();
    cookies.set('userName', randomName);
  }
  if (!cookies.get('color')) {
    const randomColors = randomColor();
    cookies.set('color', randomColors);
  }
  const userName = cookies.get('userName');
  const color = cookies.get('color');
  const userData = [userName, color];

  const preloadedState = {
    server: { ...gon },
    ui: {
      isShowModal: false,
      isShowAlert: false,
    },
  };

  /* eslint-disable*/
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(thunk),
  ));
  ReactDOM.render(
    <Provider store={store}>
      <UserDataContext.Provider value={userData}>
        <App />
      </UserDataContext.Provider>
    </Provider>,
    rootElement,
  );
  socket.on('newMessage', ({ data: { attributes } }) => {
    store.dispatch(addMessage(attributes));
  });
};

export default app;
