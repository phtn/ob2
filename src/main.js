import React, { Component } from 'react';
import $ from "jquery";

class MainPage extends Component {

	showModal() {
		$('.modal').fadeIn('fast')
	}
	hideModal() {
		$('.modal').fadeOut('fast')
	}
	handleSelection(name) {
		/*var tempAddItem = []
		tempAddItem.concat({
			id: Math.round((Math.random(10)*10000)), name: name
		})
		console.log(tempAddItem[0])*/
		console.log(name)
	}	
	showItems() {
		
		return this.props.items.map( item => {
			return (<a className="btn btn-info items" 
										key={item.id}
										onClick={this.handleSelection(item.name)}
							>{item.name}
							</a>)
		});

	}
	showAddedItems() {
		return this.props.addedItems.map( item => {
			return (<a className="btn btn-info items" 
										key={item.id}
										onClick={() => console.log(item.name)}
							>{item.name}
							</a>)
		});
	}

	render() {

		//let i = [ 'Mortgage', 'Car Payment'];
		
		if (this.props.addedItems.length !== 0) {
			return(
				<div className="">
					<ul className="list-group">
						{this.showAddedItems()}
					</ul>
				</div>
			)	
		} else {
			return (
				<div>
				<div className="jumbotron">
				  <h2>Monitor is empty</h2>
				  <a className="btn btn-primary btn-lg" onClick={this.showModal}>
				  	<span className="fa fa-plus"></span>	
				  	Add Item
				  </a>
				</div>

				<div className="modal">
				  <div className="modal-dialog">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.hideModal}>&times;</button>
				        <h4 className="modal-title">Add Monthly Expenses</h4>
				      </div>
				      <div className="modal-body">
				        
				        {this.showItems()}
				      
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.hideModal}>Cancel</button>
				      </div>
				    </div>
				  </div>
				</div>
				</div>
			)
		}
		
	}
}

export default MainPage;