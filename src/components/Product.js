import React, { Component } from 'react';





class Product extends Component {

  state={view:false}

  view = () => {
    this.setState((prevState)=>({view:!prevState.view}))
  }


  modal = (img,e) => {
    e.preventDefault()
    this.props.modal()
    this.props.modalPhoto(this.props.product.img)
  }


  render(){
    const product = this.props.product
    const {name, price, gender, img} = product;


    return(
      <div
       onMouseEnter={this.view}
       onMouseLeave={this.view}>
        <div className="Product-Image">
          <img src={window.location.origin + `${img}`} alt="img test" width="170" height="170" />
          <div className={(this.state.view) ? 'view-1' : 'view-2'}
          onClick= {(e) => this.modal(img,e)} >
          Quick View
          </div>
        </div>
        <div className="Product-Desc">
          <div className="Product-name">
            {name}
          </div>
          <div className="Product-gender">
            {gender}
          </div>
          <div className="Product-price">
            $ {price}
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
