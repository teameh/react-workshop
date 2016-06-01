import { VIEW_PRODUCT_DETAILS, ADD_PRODUCT, CHANGE_FILTER } from './ActionTypes';

export function onViewProductDetails(productIndex) {
  return {
    type: VIEW_PRODUCT_DETAILS,
    productIndex: productIndex
  };
}

// ES6
// const onViewProductDetails = (productIndex) => ({
//   type: VIEW_PRODUCT_DETAILS,
//   productIndex: productIndex
// });

export function onAddNewProduct(title, price) {
  return {
    type: ADD_PRODUCT,
    title: title,
    price: price
  };
}

export function onFilter(query) {
  return {
    type: CHANGE_FILTER,
    query: query
  };
}
