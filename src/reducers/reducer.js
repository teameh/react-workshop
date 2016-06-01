import { VIEW_PRODUCT_DETAILS, ADD_PRODUCT } from '../actions/ActionTypes';

export default function reducer(state = {}, action) {

  // return {
  //   selectedIndex: action.productIndex,
  //   products: state.products,
  //   text: state.text
  // };

  // Don't mutate state like this:
  // state.selectedIndex = action.productIndex;

  // Don't lose other properties of the state:
  // return Object.assign({}, state, {
  //   selectedIndex: action.productIndex
  // });

  switch (action.type) {
    case VIEW_PRODUCT_DETAILS:
      // Same object with new productIndex
      return Object.assign({}, state, {
        selectedIndex: action.productIndex
      });

      break;

    case ADD_PRODUCT:
      const newProduct = {
        title: action.title,
        price: action.price
      };

      // Same object with new products
      return Object.assign({}, state, {
        products: [...state.products, newProduct]
      });

      break;
    default:
      return state;
  }
}
