import React, { Component } from 'react';
import Menu from './components/Menu.js';
import Products from './components/Products.js';
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
                  <div onClick={event => this.props.dispatch(actionClickTab("Cart"))}><i className="fas fa-shopping-cart"></i></div>
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
              Admin page
          </div>
          <div id="HistoryWrap" className={(this.props.currentTab==="History") ? "visible" : "invincible"}>
              History page
          </div>
          <div id="CartWrap" className={(this.props.currentTab==="Cart") ? "visible" : "invincible"}>
              Cart page
          </div>
      </div>//end of outer wrap
    );
  }
}

let mapStateToProps = state => {
	return {
		currentTab: state.currentTab
	};
}

export default connect(mapStateToProps)(App);
