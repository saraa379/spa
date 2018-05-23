import {TAB_CLICKED, ADD_PRODUCT} from './constants.js';
//click event for tabs
let actionClickTab = (currentTab) => {
	return {
		type: TAB_CLICKED,
		tab: currentTab
	}
}

let actionAddProduct = (id, name, price, url) => {
	return {
		type: ADD_PRODUCT,
		name: name,
		price: price,
		url: url,
		id: id
	}
}
export { actionAddProduct, actionClickTab };
