import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as actions from '../actions/actions';

import ProductView from '../components/ProductView';
import ProductDetailView from '../components/ProductDetailView';
import ProductInputView from '../components/ProductInputView';
import ProductFilterView from '../components/ProductFilterView';

import getFilteredProducts from '../selectors/getFilteredProducts';

class Root extends Component {

  render() {
    const { text, products, selectedIndex = false, onViewProductDetails } = this.props;

    const productDetails = selectedIndex !== false ? (
      <ProductDetailView
        selectedIndex={selectedIndex}
        title={products[selectedIndex].title}
        price={products[selectedIndex].price}
      />
    ) : false;

    return (
      <div>
        <h2>{text}</h2>
        <h3>Click on a product to see it's price</h3>
        <ul>
          {products.map((product, i) => {
            return (
              <ProductView
                key={i}
                title={product.title}
                productIndex={i}
                selected={selectedIndex === i}
                onClick={onViewProductDetails}
              />
            );
          })}
        </ul>

        <ProductFilterView />

        {productDetails}

        <ProductInputView />

      </div>
    );
  }
}

Root.propTypes = {
  text: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
};

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    text: state.text,
    products: getFilteredProducts(state),
    selectedIndex: state.selectedIndex
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  // or just return all of our actions
  return bindActionCreators(actions, dispatch);
}

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Root);

