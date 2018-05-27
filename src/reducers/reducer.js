import {TAB_CLICKED, ADD_PRODUCT, ADD_TO_CART} from '../actions/constants.js';

let rootReducer = (state, action) => {
	var textHistory = "";
	switch( action.type ) {

		case ADD_PRODUCT:
			textHistory = "New product is added into shopping cart, Product id is: " + action.id;
			console.log(textHistory);
			return Object.assign({}, state, {
        products: [
          ...state.products,
          {
						name: action.name,
						price: action.price,
						url: action.url,
						id: action.id
          }
        ],
				latestId: action.id,
				history: [...state.history, textHistory]
      });

		case TAB_CLICKED:
			textHistory = "Menu item is clicked. Clicked tab was: " + action.tab;
			return {
				...state,
				currentTab: action.tab,
				history: [...state.history, textHistory]
		};

		case ADD_TO_CART:
			textHistory = "Product is added into shopping cart. Added item was: " + action.productId;
			return {
				...state,
				cartCount: state.cartCount + 1,
				pIdAddedCart: action.productId,
				history: [...state.history, textHistory]
			};

		default:
			return state;
	}
}

export default rootReducer;
