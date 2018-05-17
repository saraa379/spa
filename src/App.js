import React, { Component } from 'react';
import Menu from './components/Menu.js';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
          <div id="AppWrap" className={(this.props.currentContent=="Home") ? "visible" : "invincible"}>
              <header>
                  <Menu></Menu>
                  <div className="icons">
                      <div><i className="fas fa-user"></i></div>
                      <div><i className="fas fa-shopping-cart"></i></div>
                  </div>
              </header>
              <div className="hero">
              </div>
        	  	  Hello Redux!
          </div>
          <div id="AdminWrap" className={(this.props.currentContent=="Admin") ? "visible" : "invincible"}>
              Admin page
          </div>
      </div>//end of outer wrap
    );
  }
}

let mapStateToProps = state => {
	return {
		currentContent: state.currentContent
	};
}

export default connect(mapStateToProps)(App);
