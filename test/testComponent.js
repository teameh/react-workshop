import React from 'react';
import { expect } from 'chai';

import sd from 'skin-deep';

import ProductDetailView from "../src/components/ProductDetailView";

describe('Test Components', function () {

  function shallowRender(props) {
    return sd.shallowRender(React.createElement(ProductDetailView, props));
  }

  it('Render ProductDetailView', function () {
    let tree = shallowRender({ title: 'iPhone', price: 599, selectedIndex: 2 });
    expect(tree.subTree('p').text()).to.equal('iPhone costs 599 euros');

    tree = shallowRender({ title: 'iMac', price: 2999, selectedIndex: 2 });
    expect(tree.subTree('b').text()).to.equal('2999');
  });

});
