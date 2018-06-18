import React, { Component } from 'react';


class CartProducts extends Component{


  renderProducts = () => {
    return this.props.cart.map((each)=> (
      <div key={each.id} className="cartProductwrap">
        <div className="cpLeft">
          <img src={window.location.origin + `${each.img}`} height="100" width="100" />
        </div>

        <div className="cpRight">

          <div className="cartNP">
            <h4>{`${each.name} -${each.gender}`}</h4>
            <h4>${each.price * each.qty}.00</h4>
          </div>

          <h4>{`color -${each.color}`}</h4>
          <h4>{`size -${each.size}`}</h4>
          <h4>{`QTY -${each.qty} @ $${each.price}.00`}</h4>

          <div className="cartEdit">
            <div className="removeProdCart">
            <button type="button" onClick={()=>this.props.cartRemove(each.id)}> Remove </button>
            </div>
          </div>

         </div>

     </div>
    )
  )
}

  render() {
    return(
    <div>
      {this.renderProducts()}
    </div>
    )
  }
}


export default CartProducts;
