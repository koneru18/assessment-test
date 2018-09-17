import React from 'react';
import PropTypes from 'prop-types';
import CartListRow from './CartListRow';

const CartList = ({cartItems}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
      </tr>
      </thead>
      <tbody>
      {cartItems.map(item =>
        <CartListRow key={item.productId} cartItem={item}/>
      )}
      </tbody>
    </table>
  );
};

CartList.propTypes = {
  cartItems: PropTypes.array.isRequired
};

export default CartList;