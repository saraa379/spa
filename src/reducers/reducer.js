import {TAB_CLICKED} from '../actions/constants.js';

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
      })

		case TAB_CLICKED:
			return {
				...state,
				currentTab: action.tab
		};

		default:
			return state;
	}
}

export default rootReducer;
