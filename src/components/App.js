import React, { Component } from 'react'
import './App.css'
import Nav from './Nav'
import Main from '../containers/Main'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from '../containers/Cart'
import ProductPage from '../containers/ProductPage'
import {FaClose } from 'react-icons/lib/fa'




class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <div className="space"> </div>
            <Switch>
              <Route path="/contact" component={Cart}/>
              <Route path="/product/:filter" component={ProductPage}/>
              <Route exact path="/" component={Main}/>
              )} />
            </Switch>
            <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
