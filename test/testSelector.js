import { expect } from 'chai';

import deepFreeze from 'deep-freeze'

import * as Actions from '../src/actions/actions';
import reducer from '../src/reducers/reducer';
import getFilteredProducts from '../src/selectors/getFilteredProducts';

describe('Test Selectors', function () {

  function getNewExampleTestState() {
    return {
      text: 'some text',
      products: [
        { title: 'iPhone', price: 599 },
        { title: 'iPod', price: 299 },
        { title: 'iPad', price: 699 },
        { title: 'iMac', price: 2299 }
      ]
    };
  }

  it('Change Filter', function () {
    const originalState = getNewExampleTestState();
    deepFreeze(originalState);

    // Check default
    let filteredProducts = getFilteredProducts(originalState);
    expect(filteredProducts).to.equal(originalState.products);
    expect(filteredProducts).to.deep.equal(originalState.products);

    // Check with filter
    let testAction = Actions.onFilter('iP');
    let newState = reducer(originalState, testAction);

    filteredProducts = getFilteredProducts(newState);
    expect(filteredProducts).to.not.equal(originalState.products);
    expect(filteredProducts).to.have.length(3, 'Result should be 3 products..');

    // Check empty
    testAction = Actions.onFilter('');
    newState = reducer(originalState, testAction);
    filteredProducts = getFilteredProducts(newState);

    expect(filteredProducts).to.equal(originalState.products);
    expect(filteredProducts).to.deep.equal(originalState.products);
  });

  it('Check Computations', function () {
    // Reset for this test
    getFilteredProducts.resetRecomputations();
    expect(getFilteredProducts.recomputations()).to.equal(0);

    const originalState = getNewExampleTestState();

    getFilteredProducts(originalState);
    expect(getFilteredProducts.recomputations()).to.equal(1);

    getFilteredProducts(originalState);
    expect(getFilteredProducts.recomputations()).to.equal(1);

    // Check with filter
    let testAction = Actions.onFilter('iP');
    let newState = reducer(originalState, testAction);

    getFilteredProducts(newState);
    expect(getFilteredProducts.recomputations()).to.equal(2);

    // Test unrelated action
    testAction = Actions.onViewProductDetails(2);
    newState = reducer(newState, testAction);
    getFilteredProducts(newState);
    expect(getFilteredProducts.recomputations()).to.equal(2, 'View product details should have no effect on filter');

    // Check empty
    testAction = Actions.onFilter('');
    newState = reducer(originalState, testAction);

    getFilteredProducts(newState);
    expect(getFilteredProducts.recomputations()).to.equal(3);

    getFilteredProducts(newState);
    expect(getFilteredProducts.recomputations()).to.equal(3);
  });
});
