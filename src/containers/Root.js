import React, { PropTypes, Component } from 'react';

import ProductView from '../components/ProductView';
import ProductDetailView from '../components/ProductDetailView';

class Root extends Component {

  constructor() {
    super();
    this.state = {};

    this.onClickProduct = this.onClickProduct.bind(this);
  }

  onClickProduct(index, product) {
    this.setState({
      selectedIndex: index,
      selectedProduct: product
    })
  }

  render() {
    const { text, products } = this.props;
    const { selectedProduct, selectedIndex } = this.state;

    const productDetails = selectedProduct ? (
      <ProductDetailView
        selectedIndex={selectedIndex}
        title={selectedProduct.title}
        price={selectedProduct.price}
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
                onClick={this.onClickProduct}
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

export default Root;
