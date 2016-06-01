export default function reducer(state = {}, action) {

  return {
    selectedIndex: action.productIndex,
    products: state.products,
    text: state.text
  };

  // Don't mutate state like this:
  // state.selectedIndex = action.productIndex;

  // Don't lose other properties of the state:
  // return Object.assign({}, state, {
  //   selectedIndex: action.productIndex
  // });

  // switch (action.type) {
  //   case 'viewProductDetails':
  //     // Same object with new productIndex
  //     return Object.assign({}, state, {
  //       selectedIndex: action.productIndex
  //     });
  //
  //     break;
  //   default:
  //     return state;
  // }
}
