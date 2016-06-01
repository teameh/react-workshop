import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import ProductView from '../components/ProductView';
import ProductDetailView from '../components/ProductDetailView';

class Root extends Component {

  render() {
    const { text, products, selectedIndex = false, onViewProductDetails } = this.props;

    const productDetails = selectedIndex !== false ? (
      <ProductDetailView
        selectedIndex={selectedIndex}
        title={products[selectedIndex].title}
        price={products[selectedIndex].price}
      />
    ) : (
      <div>
        <h3>Click on a product to see it's price</h3>
      </div>
    );

    return (
      <div>
        <h2>{text}</h2>
        <ul>
          {products.map((product, i) => {
            return (
              <ProductView
                key={i}
                productIndex={i}
                product={product}
                onClick={onViewProductDetails}
              />
            );
          })}
        </ul>

        {productDetails}

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
    products: state.products,
    selectedIndex: state.selectedIndex
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  const bindedActionCreators = bindActionCreators(actions, dispatch);
  return {
    onViewProductDetails: bindedActionCreators.onViewProductDetails
  };

  // or just return all of our actions
  // return bindActionCreators(actions, dispatch);
}

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Root);

