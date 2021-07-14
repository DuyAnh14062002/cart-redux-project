import React, {Component} from 'react'
import * as Message from './../constants/Message'
class CartItem extends Component{
  render(){
    var {item} = this.props
    return(
        <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}</td>
            <td className="center-on-small-only">
                <span className="qty">{item.quantity}</span>&nbsp;
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label 
                    className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                    onClick = {() => this.onUpdate(item.product, item.quantity - 1)}
                    >
                        <a>—</a>
                    </label>
                    <label 
                    className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                    onClick = {() => this.onUpdate(item.product, item.quantity + 1 )}
                    >
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{this.subTotalPrice(item.product.price, item.quantity)}$</td>
            <td>
                <button 
                  type="button" 
                  className="btn btn-sm btn-primary waves-effect waves-light" 
                  data-toggle="tooltip" 
                  data-placement="top" 
                  title="" 
                  data-original-title="Remove item"
                  onClick = {() => this.onDelete(item.product)}
                  >
                    X
                </button>
            </td>
        </tr>
    )
  }
  onUpdate = (product, quantity) =>
  {
    var {onUpdateProductInCart,onChangeMessage } = this.props
     onUpdateProductInCart(product,quantity)
     onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
     if(quantity === 0)
     {
        onChangeMessage(Message.MSG_WELCOME)
     }
  }
  onDelete = (product) =>
  {
    var {onDeleteProductInCart, onChangeMessage} = this.props
    onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    onDeleteProductInCart(product)
  }
  subTotalPrice = (price, quantity) =>
  {
    return price*quantity
  }
}

export default CartItem;
