import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import UserNameContext from './components/Context';
import rootReducer from './reducers';
import App from './components/App';
import './css/style.scss';

const rootElement = document.getElementById('chat');

const app = (gon, faker, cookies) => {
  const randomName = faker.name.findName();

  cookies.set('userName', randomName);
  const userName = cookies.get('userName');

  const preloadedState = {
    server: { ...gon },
    ui: {
      isShowModal: false,
      isAddMessageSuccess: true,
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
      <UserNameContext.Provider value={userName}>
        <App />
      </UserNameContext.Provider>
    </Provider>,
    rootElement,
  );
};

export default app;
