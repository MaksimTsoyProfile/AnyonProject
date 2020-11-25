import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { keyBy } from 'lodash';
import UserDataContext from './components/Context';
import rootReducer from './reducers';
import App from './components/App';
import './scss/style.scss';
import randomColor from './colors';
import socket from './socket';
import {
  addMessage, addChannel, removeCurrentChannel, setCurrentId, renameCurrentChannel,
} from './actions';

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
  const channels = keyBy(gon.channels, (channel) => channel.id);
  const preloadedState = {
    server: { ...gon, channels },
    ui: {
      isShowModal: false,
      isShowAlert: false,
      isShowSuccess: false,
      isShowModalAlert: { isShow: false, id: null },
      isShowFormRename: { isShow: false, id: null, initialValue: null },
    },
  };

  /* eslint-disable*/
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(thunk),
  ));

  socket.on('newMessage', ({ data: { attributes } }) => {
    store.dispatch(addMessage(attributes));
  });
  socket.on('newChannel', ({ data: { attributes } }) => {
    store.dispatch(addChannel(attributes));
  });
  socket.on('renameChannel', ({ data: { attributes } }) => {
    store.dispatch(renameCurrentChannel(attributes));
  });
  socket.on('removeChannel', ({ data: { id } }) => {
    store.dispatch(setCurrentId(1));
    store.dispatch(removeCurrentChannel(id));
  });

  ReactDOM.render(
    <Provider store={store}>
      <UserDataContext.Provider value={userData}>
        <App />
      </UserDataContext.Provider>
    </Provider>,
    rootElement,
  );
};

export default app;
