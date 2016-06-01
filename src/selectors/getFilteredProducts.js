import { createSelector } from 'reselect';

const filteredProducts = (state) => {
  const filter = state.filter;
  const products = state.products;
  console.count && console.count('- recalculate products');

  if(!filter || filter === ''){
    return products;
  }

  const regex = new RegExp(filter);
  return products.filter((product) => {
    return product.title.match(regex)
  });
};

export default filteredProducts;
