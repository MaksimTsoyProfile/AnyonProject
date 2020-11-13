// @ts-check
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import gon from 'gon';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
import app from './app';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

app(gon);
console.log('it works!');
console.log('gon', gon);
