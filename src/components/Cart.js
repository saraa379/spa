import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionAddProduct} from '../actions/actions.js';


class Cart extends Component {

	constructor(props) {
			super(props);
			this.state = {currentProducts: []};
			/*
			this.handleChangeName = this.handleChangeName.bind(this);
			this.handleChangePrice = this.handleChangePrice.bind(this);
			this.handleChangeImg = this.handleChangeImg.bind(this);
			this.handleClickAdd = this.handleClickAdd.bind(this);*/
	}//end of constructor

	componentWillReceiveProps(newProps){
				console.log("newprops came product id: " + newProps.pIdAddedCart);
				if (newProps.pIdAddedCart !== 0) {
							//retrieves product info from state array
							var indexProduct = newProps.pIdAddedCart - 1;
							var product = newProps.products[indexProduct];
							//convert product price into number
							var price = product.price.substring(0, product.price.length - 2);
							var priceNumber = parseInt(price, 10);
							var productCart = {
									name: product.name,
									price: product.price,
									url: product.url,
									id: product.id,
									totalValue: priceNumber,
									amount: 1
							}
							//saves new product into cartCount
							if (this.state.currentProducts.length) { //Cart is not empty
										 console.log("Cart is not empty");
										 var exist = false;
										 //find the product in the cart
										 	var i;
											for (i = 0; i < this.state.currentProducts.length; i++) {
													//if product is in the cart, update it
											    if (productCart.id === this.state.currentProducts[i].id) {
															console.log("Product is already in the cart");
															exist = true;
																//update the product info in array
															var tempArray = this.state.currentProducts;
															tempArray[i].amount = this.state.currentProducts[i].amount + 1;
															tempArray[i].totalValue = this.state.currentProducts[i].totalValue  + priceNumber;
															this.setState({
													      	currentProducts: tempArray
													    }); //end setstate
											    } //end if
											}//end inner for
											//if product is not in the cart, add it
											if(!exist){
												console.log("Cart is not empty, but product is not there");
													this.setState(prevState => ({
															currentProducts: [...prevState.currentProducts, productCart]
													}));
											}
							} else { //cart is empty, add the product
											console.log("Cart was empty ");
											this.setState(prevState => ({
													currentProducts: [...prevState.currentProducts, productCart]
											}));
							}//end if else


				}//end if
	}//end of will recieve props
/*
	handleChangeName(event) {
			this.setState({valueName: event.target.value});
	}

	handleChangePrice(event) {
			this.setState({valuePrice: event.target.value});
	}

	handleChangeImg(event) {
			this.setState({valueImg: event.target.value});
	}
	handleClickAdd(event) {
			console.log("Name of the product: " + this.state.valueName);
			console.log("Price of the product: " + this.state.valuePrice);
			console.log("Url of the product: " + this.state.valueImg);
			var id = this.props.latestId + 1;
			let action = actionAddProduct(id, this.state.valueName, this.state.valuePrice, this.state.valueImg);
			this.props.dispatch(action);
			this.setState({valueName: ""});
			this.setState({valuePrice: ""});
			this.setState({valueImg: ""});
	}
*/
	render() {
			var currentProducts = this.state.currentProducts;
			console.log("Current products length: " + currentProducts.length);
			console.log("Current products in array");
			var totalPay = 0;
			if(currentProducts.length !== 0){
							for (var ind = 0; ind < currentProducts.length; ind++) {
								console.log("Product in cart: " + currentProducts[ind].id);
								console.log("Product in cart: " + currentProducts[ind].name);
								console.log("Product in cart: " + currentProducts[ind].price);
								console.log("Product in cart: " + currentProducts[ind].url);
								console.log("Product in cart: " + currentProducts[ind].amount);
								console.log("Product in cart: " + currentProducts[ind].totalValue);
								totalPay = totalPay + currentProducts[ind].totalValue;
							}//for loop
			} else {
					console.log("Product array is empty");
			}

			console.log("Total amount to pay" + totalPay);

			if(this.props.cartCount === 0){
					return (
						<div className="empty">Your shopping cart is empty</div>)
			} else {

				const listItems = currentProducts.map(function(prod) {
							return <div className="producWrap" key={prod.id}>
												<div className="left">
															<img src={(prod.url.charAt(0) === 'p') ? require("../img/"+prod.url+".jpg") : prod.url} alt="product"/>
															<p>{prod.name}</p>
												</div>
												<div className="right">
														{prod.totalValue}
												</div>
									</div>;
				}); //end of map

					return (
						<div>
								{listItems}
						</div>
					)//end of return
			}//end of if else
	}//end of render

} //end of component

let mapStateToProps = state => {
	return {
		cartCount: state.cartCount,
		pIdAddedCart : state.pIdAddedCart,
		products: state.products
	};
}

export default connect(mapStateToProps)(Cart);


//
