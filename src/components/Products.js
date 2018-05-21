import React, {Component} from 'react';
import {actionUpdate} from '../actions/actions.js';
import {connect} from 'react-redux';


class Products extends Component {
	render() {
		const products = this.props.products;
		var imgIndex = 0;
		const listItems = products.map(function(product) {
					imgIndex = imgIndex + 1;
					console.log("Image url: " + product.url);

					let url = 'p' + imgIndex;
				  return <div className="product" key={product.name}>
											 <img src={require("../img/"+url+".jpg")} alt="product"/>
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
