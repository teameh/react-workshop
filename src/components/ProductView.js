import React, { PropTypes, Component } from 'react';
import randomColor from '../utils/randomColor';
import shallowCompare from 'react-addons-shallow-compare';

export default class ProductView extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.title !== nextProps.title || this.props.onClick !== nextProps.onClick;
    // return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { title, onClick } = this.props;

    console.count('render productview for' + title);

    return (
      <li style={{backgroundColor: randomColor()}} onClick={onClick}>
        {title}
      </li>
    );
  }
};

ProductView.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
