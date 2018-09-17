import React from 'react';
import PropTypes from 'prop-types';

const CartListRow = ({cartItem}) => {
  return (
    <tr>
      <td>{cartItem.productTitle}</td>
      <td>{cartItem.quantity}</td>
    </tr>
  );
};

CartListRow.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartListRow;