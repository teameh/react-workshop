import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/actions';

class ProductInputView extends Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { onAddNewProduct } = this.props;
    const { title, price } = this.refs;

    // Add product
    onAddNewProduct(title.value, parseInt(price.value, 10));

    // prevent refresh
    e.preventDefault();

    // reset values
    title.value = '';
    price.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Add new products</h2>
        <input type="text" ref="title" placeholder="title"/>
        <input type="number" ref="price" placeholder="price"/>
        <input type="submit" value="Add!"/>
      </form>
    );
  }
};

ProductInputView.propTypes = {
  onViewProductDetails: PropTypes.func.isRequired
};

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

// Connected Component
export default connect(null, mapDispatchToProps)(ProductInputView);
