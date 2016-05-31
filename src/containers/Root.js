import React, { PropTypes, Component } from 'react';

class Root extends Component {
  render() {
    const { text, products } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <ul>
          {products.map((product, i) => {
            return (
              <li key={i}>
                {product.title} - {product.price}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

Root.propTypes = {
  text: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default Root;
