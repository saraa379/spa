import React, {Component} from 'react';
import {actionIncreaseByOne, actionUpdate} from '../actions/actions.js';
import {connect} from 'react-redux';


class Menu extends Component {
	render() {
		const menuItemsArray = ['Home', 'History'];
		const currentTab = this.props.currentTab;
		const listItems = menuItemsArray.map(function(tab) {
				  if (tab == currentTab) {
					return <div className="chosen" key={tab}>
								  {tab}
							</div>;
				  } else if (tab != currentTab){
					return <div key={tab}>
								  {tab}
							</div>;
				  }//end of else
			});

		return (
			<nav>
				 	{listItems}
			</nav>
		)
	}

} //end of component
let mapStateToProps = state => {
	return {
		currentTab: state.currentTab
	};
}

export default connect(mapStateToProps)(Menu);


//
