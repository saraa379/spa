import React, {Component} from 'react';
import {actionClickTab} from '../actions/actions.js';
import {connect} from 'react-redux';


class Menu extends Component {

	render() {
		const menuItemsArray = ['Home', 'History'];
		const currentTab = this.props.currentTab;
		var that = this;
		const listItems = menuItemsArray.map(function(tab) {
				  if (tab === currentTab) {
					return <div className="chosen" key={tab}>
								  {tab}
							</div>;
				  } else if (tab !== currentTab){
					return <div key={tab} onClick={event => that.props.dispatch(actionClickTab(tab))}>
								  {tab}
							</div>;
				  }//end of else
			}); //end of map

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
