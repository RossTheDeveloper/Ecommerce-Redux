import React, { Component } from 'react';
import logo from "../jackal.png";
import {FaSearch, FaHome, FaShoppingCart } from 'react-icons/lib/fa'
import AutoComplete from '../containers/AutoComplete'
import { Link } from 'react-router-dom';


// <li><Link to={`/product/1`}>temp</Link></li>
//removed above from nav, add back to test if you want

class Nav extends Component {

  state= {
    search:false
  }

searchClick = () => {
  this.setState((prevState) => ({search:!prevState.search}))
  }

searchOff = () => {
  this.setState({search:false})
  }

  render(){
    return(
      <div className="Header-fix">
        <header className="App-header">
          <ul className="flexList">
            <li><Link to="/"> <FaHome className="FaNav" /> </Link></li>
            <li><Link to="/cart"> <FaShoppingCart className="FaNav" /> </Link></li>
          </ul>

          <img src={logo} className="App-logo" alt="logo"/>

          <div className="temp">
            <FaSearch className="FaSearch"
              onClick={this.searchClick}/>
          </div>
        </header>
        {(this.state.search) && <AutoComplete searchOff={this.searchOff}/>}
      </div>

    )
  }
}


export default Nav;
