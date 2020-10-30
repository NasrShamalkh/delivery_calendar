import { createStore } from 'redux';
//-------------- our action types --------------//
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
//----------------------------------------------//

//---------------- our reducer -----------------//
const reducer = function(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
};
//----------------------------------------------//
export const increment = function() {
  return {
    type: INCREMENT
  };
};
export const decrement = function() {
  return {
    type: DECREMENT
  };
};

let Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;
