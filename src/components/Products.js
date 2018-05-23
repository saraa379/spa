import React, {Component} from 'react';
import {connect} from 'react-redux';


class Products extends Component {
	render() {
		const products = this.props.products;
		const listItems = products.map(function(product) {
				if(product.url.charAt(0) === 'p'){

					  return <div className="product" key={product.id}>
												 <img src={require("../img/"+product.url+".jpg")} alt="product"/>
									       <p>{product.name}</p>
												 <p>{product.price}</p>
												 <button>Add to cart</button>
									 </div>;
				} else if (product.url.charAt(0) !== 'p'){
						console.log("external url: " + product.url);
					return <div className="product" key={product.id}>
											<img src={product.url} alt="product"/>
											<p>{product.name}</p>
											<p>{product.price}</p>
											<button>Add to cart</button>
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
