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
			 price: "99kr",
			 url: "p1"},
			 {name: 'Marshmallow Eye Cream with Q10 and Ginseng',
 			 price: "199kr",
 			 url: "p2"},
			 {name: 'French Lavender Massage Oil',
 			 price: "299kr",
 			 url: "p3"},
			 {name: 'Chill Take it Easy Sunscreen',
				price: "150kr",
				url: "p4"},
			{name: 'Organic Honey and Almond Scrub',
				price: "170kr",
				url: "p5"},
			{name: 'Skin Smoothing Enzyme Scrub',
	 			price: "399kr",
	 			url: "p6"},
			{name: 'Skin Glow Facial Toner',
		 		price: "459kr",
		 		url: "p7"},
			{name: 'Blemish Erase',
			 	price: "239kr",
			 	url: "p8"}
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
