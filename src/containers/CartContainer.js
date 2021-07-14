import React, {Component} from 'react'
import {connect} from 'react-redux'
import Products from './../components/Products'
import Product from './../components/Product'
import PropTypes from 'prop-types'
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import * as Message from './../constants/Message'
import {actionDeleteProductInCart, actionChangeMessage, actionUpdateProductInCart} from './../actions/index'
class CartContainer extends Component{
  render(){
    var {cart} = this.props
    return(
      <Cart>
         {this.showCartItem(cart)}
         {this.showTotalMoney(cart)}
      </Cart>
    )
  }
  showCartItem = (cart) =>
  {
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>
    if(cart.length > 0)
    {
      result = cart.map((item,index) => {
        return(
           <CartItem 
              key = {index}
              item = {item}
              onDeleteProductInCart = {onDeleteProductInCart}
              onChangeMessage = {onChangeMessage}
              onUpdateProductInCart = {onUpdateProductInCart}
           />
        )
      })
    }
    return result
  }
  showTotalMoney = (cart) =>
  {
    var result = null;
    if(cart.length > 0)
    {
      return (
        <CartResult cart = {cart}/>
      )
    }
    return result
  }
}
CartContainer.propTypes = {
   cart : PropTypes.arrayOf(PropTypes.shape({
      product : PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
        image : PropTypes.string,
        description : PropTypes.string,
        price : PropTypes.number,
        inventory : PropTypes.number,
        rating : PropTypes.number
    }).isRequired,
     quantity : PropTypes.number.isRequired
   })).isRequired
}
const mapStateToProps = state =>
{
  return{
     cart : state.cart
  }
}
const mapDispatchToProps = (dispatch, props) =>
{
  return{
     onDeleteProductInCart : (product) =>
     {
      dispatch(actionDeleteProductInCart(product))
     },
     onChangeMessage : (message) =>
     {
      dispatch(actionChangeMessage(message))
     },
     onUpdateProductInCart : (product, quantity) =>
     {
      dispatch(actionUpdateProductInCart(product,quantity))
     }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
