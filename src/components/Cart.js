import React, { Component } from 'react';
import CartProducts from '../containers/CartProducts'


class Cart extends Component {

  render(){

    const subTotal = this.props.cart.reduce((acc,each)=> {
      const x =each.price*each.qty
      return x + acc },0)

    const tax = (subTotal *.08)
    const total = subTotal + (subTotal *.08)



    return(
      <div className="cart-page">

        <div className="cs-wrap">

          <div className="cs-left">
            <h2> Your Cart {`(${this.props.cart.length})`}</h2>
            <hr />
            <CartProducts cart={this.props.cart} />
          </div>

          <div className="cs-right">
            <h2>Summary</h2>
            <hr />

            <div className="Details">

              <div className="subtotal">
                {`SUBTOTAL $${subTotal.toFixed(2)}`}
              </div>

              <div className="tax">
                {`TAX $${tax.toFixed(2)}`}
              </div>

              <div className="Total">
                {`TOTAL $${total.toFixed(2)}`}
              </div>

              <div className="Total">
                {`CHECKOUT`}
              </div>

            </div>

          </div>


        </div>

      </div>







    )
  }
}

export default Cart;
