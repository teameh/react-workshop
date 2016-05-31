import React, { PropTypes, Component } from 'react';

export default class ProductView extends Component {
  render() {
    const { title, onClick } = this.props;

    return (
      <li onClick={onClick}>
        {title}
      </li>
    );
  }
};

ProductView.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
