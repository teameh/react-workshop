import { expect } from 'chai';

import deepFreeze from 'deep-freeze'

import reducer from '../src/reducers/reducer';
import * as Actions from '../src/actions/actions';

describe('Test Reducer', function () {

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

  it('Check if unknown actions do not modify the state', function () {

    const originalState = getNewExampleTestState();

    // This will assert / log if data is mutated :)
    deepFreeze(originalState);

    // Create random action
    const testAction = { type: 'UNKNOWN' };

    // Run through the reducer
    const newState = reducer(originalState, testAction);

    expect(originalState).to.equal(newState, 'Unknown action should result in the same, identical object');
    expect(originalState).to.deep.equal(newState, 'Deep values should still be the same');
  });

  it('View Product Details', function () {

    const originalState = getNewExampleTestState();

    deepFreeze(originalState);

    // Create new action
    const testAction = Actions.onViewProductDetails(2);

    const newState = reducer(originalState, testAction);

    expect(newState).to.not.equal(originalState, 'view-product-details-action returned a different object!');
    expect(newState.selectedIndex).to.equal(2, 'The second product should now be the selected product');

    // Even more specific, we know that the reducer should return this:
    const expectedNewState = Object.assign({}, newState, {
      selectedIndex: testAction.productIndex
    });

    expect(newState).to.deep.equal(expectedNewState, 'newState does not match expectedNewState');
  });

  it('Add new Product', function () {

    const originalState = getNewExampleTestState();

    deepFreeze(originalState);

    // Create new action
    const testAction = Actions.onAddNewProduct('Product C', 200);
    const expectedProduct = { 'title': 'Product C', 'price': 200 };

    const newState = reducer(originalState, testAction);

    expect(newState).to.not.equal(originalState, 'Add-new-product-action returned a different object!');
    expect(newState.products).to.have.length(5, 'Products should contain 5 products');
    expect(newState.products[4]).to.deep.equal(expectedProduct, 'Product 5 does not match expected product');
  });

  it('Change Filter', function () {

    const originalState = getNewExampleTestState();

    deepFreeze(originalState);

    // Create new action
    const testAction = Actions.onFilter('iP');

    const newState = reducer(originalState, testAction);

    expect(newState).to.not.equal(originalState, 'apply-filter-action returned a different object!');
    expect(newState.filter).to.equal('iP', 'The filter should now match the specified filter');
    expect(newState.selectedIndex).to.equal(false, 'Product should be deselected');
  });
});
