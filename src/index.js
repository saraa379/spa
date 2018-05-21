import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducer.js'

const initialState = {
	value: 14,
	currentTab: "Home",
	products: [
			{name: 'Organic Cocoa Butter By Sky Organics',
			 price: 99,
			 url: "../img/p1.jpg"},
			 {name: 'Marshmallow Eye Cream with Q10 and Ginseng',
 			 price: 199,
 			 url: "../img/p2.jpg"},
			 {name: 'French Lavender Massage Oil',
 			 price: 299,
 			 url: "../img/p3.jpg"}
  ]
};


const store = createStore(rootReducer, initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
