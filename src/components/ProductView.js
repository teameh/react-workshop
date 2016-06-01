import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/actions';
import randomColor from '../utils/randomColor';
import shallowCompare from 'react-addons-shallow-compare';

class ProductView extends Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  onClick() {
    const { productIndex, onViewProductDetails } = this.props;
    onViewProductDetails(productIndex)
  }

  render() {
    const { title } = this.props;

    console.count(`render productview for ${title}`);

    return (
      <li style={{backgroundColor: randomColor()}} onClick={this.onClick}>
        {title}
      </li>
    );
  }
};

ProductView.propTypes = {
  title: PropTypes.string.isRequired,
  productIndex: PropTypes.number.isRequired,
  onViewProductDetails: PropTypes.func.isRequired
};

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  const bindedActionCreators = bindActionCreators(actions, dispatch);
  return {
    onViewProductDetails: bindedActionCreators.onViewProductDetails
  };

  // or just return all of our actions
  return bindActionCreators(actions, dispatch);
}

// Map Redux state to component props
function mapStateToProps(state, ownProps) {
  return {
    productIndex: ownProps.productIndex,
    title: state.products[ownProps.productIndex].title
  };
}

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
