import React, { Component } from 'react';
import Select from './Select';
import Left from './Left';
import Products from './Products';
import Search from './Search'
import Modal from './Modal'
import Filters from './Filters'





class Main extends Component {

  state = {
      value: '',
      select:'',
      gender:'',
      style:'',
      color:'',
      modal1:'',
      modal2: false,
      filters:[],
      products:[]
    };

    componentDidMount(){
      this.setState({products:this.props.products})
    }

  handleChange = (e) => {
    this.setState({
      value: e
    })
  }

  handleSelect = (e) => {
    this.setState({
      select:e
    })
  }

  modal = (e) => {
    this.setState({
      modal2: e
    })
  }

  modalPhoto = (e) => {
    this.setState({
      modal1: e
    })
  }

  filterClick = (e) => {
    let {filter, type} = e.target.dataset

    this.setState((prevState) => {
      if(prevState.filters.includes(filter)) {
        return {[filter]: type}
      } else {
          return {
            [filter]: type,
            filters: [...prevState.filters, filter]
          }
      }
    })
  }

  filterRemove = (e) => {
    let {name} = e.currentTarget

    this.setState((prevState) => {
      let newFilters = prevState.filters.filter((filt) => filt !== name)
      return {filters: newFilters}
    })

    this.setState({[name]:''})
  }

  filteredProducts(){
    let text = this.state.value.toLowerCase()
    let products00
    let products0
    let products
    let selectValue = this.state.select
    let gender = this.state.gender
    let style = this.state.style
    let currentColor= this.state.color

    if(currentColor){
      products00 = this.state.products.filter( x => x.color === currentColor)
    } else {
      products00 = this.state.products
    }

    if(style ==='running'){
      products0 = products00.filter( x => x.variety === 'running')
    } else if(style ==='casual'){
      products0 = products00.filter( x => x.variety === 'casual')
    } else {
      products0 = products00
    }

    if(gender ==='male'){
      products = products0.filter( x => x.gender === 'male')
    } else if(gender ==='female'){
      products = products0.filter( x => x.gender === 'female')
    } else {
      products = products0
    }

    if(selectValue === "ASC"){
    products.sort((a,b) => (a.price) - (b.price))
    console.log(products)}

    if(selectValue === "DESC"){
    products.sort((a,b) => (b.price) - (a.price))
    console.log(products)}

    if(selectValue === "Alphabetical"){
    products.sort(function(a, b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
    })
    console.log(products)}

    if(selectValue === "New Arrivals"){
    products.sort(function(a, b){
    if(new Date(a.arrived) < new Date(b.arrived)) return 1;
    if(new Date(a.arrived) > new Date(b.arrived)) return -1;
    return 0;
    })
    console.log(products)}

     return products.filter((each) =>
      each.name.toLowerCase().indexOf(text) !== -1
  )

  }

  render() {
    const filteredProducts = this.filteredProducts()

    return (
      <div className="content">

        <Modal modal={this.modal}
          photo={this.state.modal1}
          status={this.state.modal2}/>

         <Left
          filterUp={this.filterClick}
          gender={this.state.gender}
          style={this.state.style}
          color={this.state.color}/>

          <div className="right">

            <Search value={this.state.value}
              change={this.handleChange} />

            <div className="rightTop">
              <Filters filters={this.state.filters}
                       remove={this.filterRemove}/>

              <Select
              selectChange={this.handleSelect} />
            </div>

            <Products products={filteredProducts}
              mouseOver={this.viewOver}
              mouseOut={this.viewOut}
              modal={this.modal}
              modalPhoto={this.modalPhoto}/>

          </div>

      </div>






    );
  }
}

export default Main;
