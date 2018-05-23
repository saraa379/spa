import React, {Component} from 'react';
import {connect} from 'react-redux';


class Products extends Component {

	constructor(props) {
			super(props);
			this.clickAddProductCart = this.clickAddProductCart.bind(this);
	}//end of constructor

	clickAddProductCart = (pId) => {
			console.log("Product is added to cart: " + pId);
			//console.log("Price of the product: " + this.state.valuePrice);
			//console.log("Url of the product: " + this.state.valueImg);
			//var id = this.props.latestId + 1;
			//let action = actionAddProduct(id, this.state.valueName, this.state.valuePrice, this.state.valueImg);
			//this.props.dispatch(action);
			//this.setState({valueName: ""});
			//this.setState({valuePrice: ""});
			//this.setState({valueImg: ""});
	}

	render() {
		const products = this.props.products;
		var that = this;
		const listItems = products.map(function(product) {
				if(product.url.charAt(0) === 'p'){

					  return <div className="product" key={product.id}>
												 <img src={require("../img/"+product.url+".jpg")} alt="product"/>
									       <p>{product.name}</p>
												 <p>{product.price}</p>
												 <button onClick={event => that.clickAddProductCart(product.id)}>Add to cart</button>
									 </div>;
				} else if (product.url.charAt(0) !== 'p'){
						console.log("external url: " + product.url);
					return <div className="product" key={product.id}>
											<img src={product.url} alt="product"/>
											<p>{product.name}</p>
											<p>{product.price}</p>
											<button onClick={event => that.clickAddProductCart(product.id)}>Add to cart</button>
								</div>;
				}
		}); //end of map



		return (
			<div className="productWrap">
					{listItems}
			</div>
		) //end of return

	} //end of render
}//end of component

let mapStateToProps = state => {
	return {
		products: state.products
	};
}

export default connect(mapStateToProps)(Products);
