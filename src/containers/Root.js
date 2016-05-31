import React, { PropTypes, Component } from 'react';

import ProductView from '../components/ProductView';

class Root extends Component {

  onClickProduct(index) {
    console.log('onClickProduct called with: ', arguments);
    alert(`Clicked on product ${index}`);
  }

  render() {
    const { text, products } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <ul>
          {products.map((product, i) => {
            return (
              <ProductView
                key={i}
                title={product.title}
                price={product.price}
                onClick={this.onClickProduct.bind(this, i)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Root.propTypes = {
  text: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
};

export default Root;
