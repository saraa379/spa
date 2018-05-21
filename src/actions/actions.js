import {TAB_CLICKED} from './constants.js';
//click event for tabs
let actionClickTab = (currentTab) => {
	return {
		type: TAB_CLICKED,
		tab: currentTab
	}
}

let actionUpdate = (amount) => {
	return {
		type: 'UPDATE',
		amount: amount
	}
}
export { actionUpdate, actionClickTab };
