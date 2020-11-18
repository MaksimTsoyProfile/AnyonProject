// @ts-check
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import gon from 'gon';
import faker from 'faker';
import cookies from 'js-cookie';
import app from './app';
import loading from './loading';

loading();

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

app(gon, faker, cookies);
