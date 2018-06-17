import React, { Component } from 'react';
import ProductBar from '../containers/ProductBar';



 

class ProductPage extends Component {

  renderProduct = () => {
    const products = this.props.products
    const chosen = this.props.filter
    return products.find(each => each.id === chosen)
}

render(){
  const chosenProduct = this.renderProduct()
  return (
    <div>
      <ProductBar
      product={chosenProduct}
      />
    </div>
    )
  }
}

export default ProductPage;
