import React, { PropTypes, Component } from 'react';

export default class ProductDetailView extends Component {
  render() {
    const { selectedIndex, title, price } = this.props;

    return (
      <div>
        <h3>Product details for product {selectedIndex}:</h3>
        <p>{title} costs <b>{price}</b> euros</p>
      </div>
    );
  }
};

ProductDetailView.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
