import {TAB_CLICKED, ADD_PRODUCT, ADD_TO_CART} from './constants.js';
//click event for tabs
let actionClickTab = (currentTab) => {
	return {
		type: TAB_CLICKED,
		tab: currentTab
	}
}//end of action

let actionAddProduct = (id, name, price, url) => {
	return {
		type: ADD_PRODUCT,
		name: name,
		price: price,
		url: url,
		id: id
	}
}//end of action

let actionAddToCart = (productId) => {
	return {
		type: ADD_TO_CART,
		productId: productId
	}
}//end of action

export { actionAddProduct, actionClickTab, actionAddToCart };
