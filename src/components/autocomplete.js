import React, { Component } from 'react';
import Suggestions from './Suggestions'


class AutoComplete extends Component {

state= {
  filtered:[]
}


change = () => {
  if(this.search.value){
    const filt1 = this.props.products.filter((each)=>{
      return each.name.toLowerCase().indexOf(this.search.value.toLowerCase()) !== -1
  })

  this.setState({filtered:filt1.slice(0,7)})

  } else if (!this.search.value) {
      this.setState({filtered:[]})
    }
}

searchOff = () => {
  this.props.searchOff()
}

  render(){
    return(
      <div className="searchFix">
          <form >
              <input autoFocus className="mainSearch"
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.change}
              />
              <Suggestions results={this.state.filtered}
                off={this.searchOff}/>
          </form>
      </div>
    )
  }
}


export default AutoComplete;
