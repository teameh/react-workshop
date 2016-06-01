import { createStore } from 'redux';
import reducer from '../reducers/reducer';

function configureStore(initialState) {
  return createStore(reducer, initialState);
}

export default configureStore
