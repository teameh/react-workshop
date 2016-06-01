import { createSelector } from 'reselect';

// Input selectors
const getFilter = (state) => state.filter;
const getProducts = (state) => state.products;

// Memoized selector
const getFilteredProducts = createSelector(
  [getFilter, getProducts],
  (filter, products) => {
  console.count && console.count('- recalculate products');

  if(!filter || filter === ''){
    return products;
  }

  const regex = new RegExp(filter);
  return products.filter((product) => {
    return product.title.match(regex)
  });
});

export default getFilteredProducts;
