import React, { Component } from 'react';
import {FaCheckCircle as Check } from 'react-icons/lib/fa'

class ProductBar extends Component {

  state={added:false}

  addToCart = () => {
    const product = this.props.product
    const finishedProduct = {
      ...product,
      size: this.refs.size.value,
      qty: this.refs.qty.value
    }
    const timer = setTimeout(()=> {this.setState({added:false})},3000)


    this.props.cartAdd(finishedProduct)
    this.setState({added:true},()=> timer)
  }

  render(){
    const product = this.props.product
    const {name, price, gender, img, id} = product;


    return(
      <div>
        <div className="Bar-Wrap">
        <div className={(this.state.added?"added":"added2")}> Product Added to Cart <Check className="check"/> </div>
          <div className="Bar-left bar">
            <img className="Bar-Image" src={window.location.origin + `${img}`} alt="img test" width="350" height="350" />
          </div>

          <div className="Bar-right bar">
            <div className="B-top">
              <h1>{name} -{gender}</h1>
              <h3>Price: ${price}.00</h3>
            </div>

            <div className="B-bottom">
                <div>
                  <label htmlFor="size"> <strong> Size: </strong> </label>
                  <select ref="size" name="size" onChange={()=>console.log(this.refs.size.value)}>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>

                <div>
                  <label htmlFor="qty"> <strong> QTY: </strong> </label>
                  <select ref="qty" name="qty" onChange={()=>console.log(this.refs.qty.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
              </select></div>

                <div> <button type="button" onClick={this.addToCart}> ADD TO CART </button> </div>
            </div>

            </div>
        </div>
      </div>
    )
  }
}

export default ProductBar
