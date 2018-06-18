import React, { Component } from 'react';
import CartProducts from './CartProducts'

// const cartProducts = this.props.cart.map((each)=> {
//   return <div key={each.id} className="cartProductwrap">
//             <div className="cpLeft">
//               <img src={window.location.origin + `${each.img}`} height="100" width="100" />
//             </div>
//
//             <div className="cpRight">
//
//               <div className="cartNP">
//                 <h4>{`${each.name} -${each.gender}`}</h4>
//                 <h4>${each.price * each.qty}.00</h4>
//               </div>
//
//               <h4>{`color -${each.color}`}</h4>
//               <h4>{`size -${each.size}`}</h4>
//               <h4>{`QTY -${each.qty} @ $${each.price}.00`}</h4>
//
//               <div className="cartEdit">
//                 <div className="removeProdCart">
//                 <button type="button"> Remove </button>
//                 </div>
//               </div>
//
//              </div>
//
//          </div>
// })
class Cart extends Component {

  render(){

    const subTotal = this.props.cart.reduce((acc,each)=> {
      const x =each.price*each.qty
      return x + acc },0)



    return(
      <div>

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
                {`SUBTOTAL $${subTotal}`}
              </div>

              <div className="tax">
                {`TAX`}
              </div>

              <div className="Total">
                {'TOTAL'}
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
