import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import ProductView from '../components/ProductView';
import ProductDetailView from '../components/ProductDetailView';

class Root extends Component {

  render() {
    const { text, products, selectedIndex = false } = this.props;

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
                productIndex={i}
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

// Connected Component
export default connect(mapStateToProps)(Root);

