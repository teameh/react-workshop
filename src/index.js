import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const text = "React Workshop!";

const products = [
  { title: 'Macbook Pro', price: 2500 },
  { title: 'Rubiks Cube', price: 15 },
  { title: 'Polaroid Camera', price: 150 }
];

const store = configureStore({
  text: text,
  products: products,
});

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
