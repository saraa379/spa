import React, {Component} from 'react';
import {connect} from 'react-redux';


class History extends Component {

	render() {
			var historyList = this.props.history;
			//var historyList = ['item 1', 'item 2', 'item 3'];
			var historyIndex = 0;
			if(historyList.length === 0){
						return (<div className="empty"> No actions yet </div>)
			} else {
				const listItems = historyList.map(function(item) {
						 historyIndex = historyIndex + 1;
							return <p className="itemP" key={historyIndex}>
												{item}
									</p>;
				}); //end of map

			return (
					<div className="historyWrap">
								{listItems}
					</div> )
			}//end of if else
	}//end of render

} //end of component

let mapStateToProps = state => {
	return {
		history: state.history
	};
}

export default connect(mapStateToProps)(History);


//
