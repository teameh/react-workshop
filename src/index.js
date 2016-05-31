import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

const text = "React Workshop!";

const products = [
  { title: 'Macbook Pro', price: 2500 },
  { title: 'Rubiks Cube', price: 15 },
  { title: 'Polaroid Camera', price: 150 }
];

render(
  <Root
    text={text}
    products={products}
  />,
  document.getElementById('root')
);
