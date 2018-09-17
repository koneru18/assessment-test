import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import CartList from './CartList';
// import { Redirect } from 'react-router';
import {withRouter} from "react-router-dom";
import * as cartActions from '../../actions/cartActions';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Cart Items</h1>
        <CartList cartItems={this.props.cartItems}/>
      </div>
    );
  }
}

CartPage.propTypes = {
  actions: PropTypes.object.isRequired,
  cartItems: PropTypes.array.isRequired
  // history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cartItems: state.cartItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartPage));
