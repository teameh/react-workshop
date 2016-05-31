import React, { PropTypes, Component } from 'react';

export default class ProductView extends Component {
  render() {
    const { title, price, onClick } = this.props;

    return (
      <li onClick={onClick}>
        {title} - {price}
      </li>
    );
  }
};

ProductView.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
