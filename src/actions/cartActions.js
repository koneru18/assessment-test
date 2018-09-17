import * as types from './actionTypes';
import CartApi from '../api/CartItems';

export function loadCartSuccess(cartItems) {
    return {type: types.LOAD_CART_SUCCESS, cartItems};
}

export function loadCourses() {
  console.log('HI######');

    return function (dispatch) {
      return CartApi.getAllCartItems().then(cartItems => {
        dispatch(loadCartSuccess(cartItems));
      }).catch(error => {
        throw(error);
      });
    };
}
