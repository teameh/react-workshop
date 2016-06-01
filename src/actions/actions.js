import { VIEW_PRODUCT_DETAILS, ADD_PRODUCT } from './ActionTypes';

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
