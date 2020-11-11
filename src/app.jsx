import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('chat');

const app = (channels) => {
  ReactDOM.render(
    <App channels={channels} />,
    rootElement,
  );
};

export default app;
