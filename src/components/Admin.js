import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionAddProduct} from '../actions/actions.js';


class Admin extends Component {

	constructor(props) {
			super(props);
			this.state = {valueName: '',
										valuePrice: '',
										valueImg: ''
			}; //end of state
			this.handleChangeName = this.handleChangeName.bind(this);
			this.handleChangePrice = this.handleChangePrice.bind(this);
			this.handleChangeImg = this.handleChangeImg.bind(this);
			this.handleClickAdd = this.handleClickAdd.bind(this);
	}//end of constructor

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
			let action = actionAddProduct(this.state.valueName, this.state.valuePrice, this.state.valueImg);
			this.props.dispatch(action);
			this.setState({valueName: ""});
			this.setState({valuePrice: ""});
			this.setState({valueImg: ""});
	}

	render() {


		return (
			<div>
					<div className="adminHeader">
							<h2>Admin board</h2>
					</div>
					<div className="adminContent">
									<h3>Add product</h3>
									<input type="text" placeholder="Product name" value={this.state.valueName} onChange={this.handleChangeName}/>
									<input type="text" placeholder="Price" value={this.state.valuePrice} onChange={this.handleChangePrice}/>
									<input type="text" placeholder="Image" value={this.state.valueImg} onChange={this.handleChangeImg}/>
									<button onClick={this.handleClickAdd}>Add</button>
					</div>

			</div>
		)//end of return
	}//end of render

} //end of component
let mapStateToProps = state => {
	return {
		currentTab: state.currentTab
	};
}

export default connect(mapStateToProps)(Admin);


//
