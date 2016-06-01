import React, { PropTypes, Component } from 'react';
import randomColor from '../utils/randomColor';
import shallowCompare from 'react-addons-shallow-compare';

export default class ProductView extends Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  onClick() {
    const { productIndex, onClick } = this.props;
    onClick(productIndex)
  }

  render() {
    const { product } = this.props;
    // const { product: { title } } = this.props;

    console.count('render productview for' + product.title);

    return (
      <li style={{backgroundColor: randomColor()}} onClick={this.onClick}>
        {product.title}
      </li>
    );
  }
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
  productIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
