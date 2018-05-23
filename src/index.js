import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducer.js'

const initialState = {
	cartCount: 0,
	currentTab: "Home",
	latestId: 8,
	products: [
			{name: 'Organic Cocoa Butter By Sky Organics',
			 price: "99kr",
			 id: 1,
			 url: "p1"},
			 {name: 'Marshmallow Eye Cream with Q10 and Ginseng',
 			 price: "199kr",
			 id: 2,
 			 url: "p2"},
			 {name: 'French Lavender Massage Oil',
 			 price: "299kr",
			 id: 3,
 			 url: "p3"},
			{name: 'Chill Take it Easy Sunscreen',
				price: "150kr",
				id: 4,
				url: "p4"},
			{name: 'Organic Honey and Almond Scrub',
				price: "170kr",
				id: 5,
				url: "p5"},
			{name: 'Skin Smoothing Enzyme Scrub',
	 			price: "399kr",
				id: 6,
	 			url: "p6"},
			{name: 'Skin Glow Facial Toner',
		 		price: "459kr",
				id: 7,
		 		url: "p7"},
			{name: 'Blemish Erase',
			 	price: "239kr",
				id: 8,
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
