import {TAB_CLICKED} from '../actions/constants.js';

let rootReducer = (state, action) => {
	switch( action.type ) {

		case 'UPDATE':
			return {
				...state,
				value: state.value + action.amount
			};

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
