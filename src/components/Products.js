import React, {Component} from 'react';
import {actionUpdate} from '../actions/actions.js';
import {connect} from 'react-redux';

class Products extends Component {
	render() {
		const products = this.props.products;
		console.log("Products array: " + products);
		const listItems = products.map(function(product) {
				  return <div className="product" key={product.name}>
											 <img src="https://cdn.pixabay.com/photo/2016/01/14/09/21/handmade-1139554_640.jpg" alt="product" height="50" width="50"/> 
								       <p>{product.name}</p>
											 <p>{product.price}</p>
								 </div>;
		}); //end of map

		return (
			<div>
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
