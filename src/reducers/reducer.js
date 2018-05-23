import {TAB_CLICKED, ADD_PRODUCT, ADD_TO_CART} from '../actions/constants.js';

let rootReducer = (state, action) => {
	switch( action.type ) {

		case 'ADD_PRODUCT':
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
				latestId: action.id
      });

		case TAB_CLICKED:
			return {
				...state,
				currentTab: action.tab
		};

		case ADD_TO_CART:
			return {
				...state,
				cartCount: state.cartCount + 1,
				productsInCart: [...state.productsInCart, action.productId],
			};

		default:
			return state;
	}
}

export default rootReducer;
