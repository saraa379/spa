import React, { Component } from 'react';
import Menu from './components/Menu.js';
import Products from './components/Products.js';
import Admin from './components/Admin.js';
import Cart from './components/Cart.js';
import History from './components/History.js';
import {actionClickTab} from './actions/actions.js';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
          <header>
              <Menu></Menu>
              <div className="icons">
                  <div onClick={event => this.props.dispatch(actionClickTab("Admin"))}><i className="fas fa-user"></i></div>
                  <div onClick={event => this.props.dispatch(actionClickTab("Cart"))}><i className="fas fa-shopping-cart"></i><span>{(this.props.cartCount!==0) ? this.props.cartCount : ''}</span></div>
              </div>
          </header>
          <div id="AppWrap" className={(this.props.currentTab==="Home") ? "visible" : "invincible"}>

              <div className="hero">
                    <div className="titleDiv">
                        <h1>Spa & Body shop</h1>
                        <p>Mend your mind and body</p>
                    </div>
              </div>
              <Products />
          </div>
          <div id="AdminWrap" className={(this.props.currentTab==="Admin") ? "visible" : "invincible"}>
              <Admin />
          </div>
          <div id="HistoryWrap" className={(this.props.currentTab==="History") ? "visible" : "invincible"}>
                  <div className="innerCart">
                      <div className="cartHeader">
                          <h2>Action history</h2>
                      </div>
                      <History />
                  </div>
          </div>
          <div id="CartWrap" className={(this.props.currentTab==="Cart") ? "visible" : "invincible"}>
              <div className="innerCart">
                  <div className="cartHeader">
                      <h2>Shopping cart</h2>
                  </div>
                  <Cart />
              </div>
          </div>
      </div>//end of outer wrap
    );
  }
}

let mapStateToProps = state => {
	return {
		currentTab: state.currentTab,
    cartCount: state.cartCount
	};
}

export default connect(mapStateToProps)(App);
