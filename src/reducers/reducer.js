import { VIEW_PRODUCT_DETAILS, ADD_PRODUCT, CHANGE_FILTER } from '../actions/ActionTypes';

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

    case ADD_PRODUCT:
      const newProduct = {
        title: action.title,
        price: action.price
      };

      // Same object with new product
      return Object.assign({}, state, {
        products: [...state.products, newProduct]
      });

    case CHANGE_FILTER:
      // Same object
      return Object.assign({}, state, {
        // with new filter
        filter: action.query,
        // and no selected products
        selectedIndex: false
      });

    default:
      return state;
  }
}
