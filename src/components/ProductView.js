import React, { PropTypes, Component } from 'react';
import cssDecorator from 'react-css-modules';

import shallowCompare from 'react-addons-shallow-compare';

import Styles from './ProductView.scss'

class ProductView extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  onClick = () => {
    const { productIndex, onClick } = this.props;
    onClick(productIndex)
  };

  render() {
    const { title, productIndex, selected } = this.props;

    console.count(`render productview for ${title}`);

    return (
      <li styleName={selected ? 'product-selected' : 'product'} onClick={this.onClick}>
        <span className='product-index'>
          {productIndex}
        </span>
        <span styleName='title'>
          {title}
        </span>
      </li>
    );
  }
};

ProductView.propTypes = {
  title: PropTypes.string.isRequired,
  productIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default cssDecorator(ProductView, Styles);

