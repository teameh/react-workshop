import { VIEW_PRODUCT_DETAILS } from './ActionTypes';

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
