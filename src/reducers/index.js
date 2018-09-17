import { combineReducers } from 'redux';
import cartItems from './cartReducer';

const rootReducer = combineReducers({
    cartItems
});

export default rootReducer;