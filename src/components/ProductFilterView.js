import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/actions';

class ProductFilterView extends Component {

  onChange = (e) => {
    const { onFilter } = this.props;
    const { filter } = this.refs;

    // Add product
    onFilter(filter.value);
  };

  render() {
    return (
      <form>
        <h3>Filter Products</h3>
        <input type="text" ref="filter" placeholder="type to filter" onChange={this.onChange}/>
      </form>
    );
  }
};

ProductFilterView.propTypes = {
  onViewProductDetails: PropTypes.func.isRequired
};

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

// Connected Component
export default connect(null, mapDispatchToProps)(ProductFilterView);
