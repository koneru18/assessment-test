import * as types from '../actions/actionTypes';

export default function cartReducer(state = [], action) {
    console.log(`in Cart reducer ${JSON.stringify(state)}, ${JSON.stringify(action)}`)
    switch(action.type) {
        case types.LOAD_CART_SUCCESS:
            return action.cartItems;
        default:
            return state;
    }
}