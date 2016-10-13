import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainPage from './main';
import './index.css';



class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			page: false,
			items: [{id: 1 , name: 'Mortgage'},{id: 2, name: 'Car'}],
			addedItems: []
		}
	}
	togglePage() {
		this.setState({page: this.state.page !== false ? false : true})
		console.log(this.state.page)
	}

  render() { 
    return (
      <div className="container-fluid">
      	<Title print={this.printTest}/>
      	<MainPage page={this.state.page} 
      						items={this.state.items} 
      						addedItems={this.state.addedItems} 
      						toggle={this.togglePage.bind(this)}/>
      </div>
  	)
  }
}



class Title extends Component {
	
	render() {
		return (
			<div className="title-div">
      	<a className="btn btn-default ">
	        <span className="fa fa-user"></span>
	      </a>
	      <a className="btn btn-default disabled brand" onClick={this.props.print}>
	        FINANCE MONITOR
	      </a>
	      
	      <a className="btn btn-default disabled pull-right total-value">
	        <span>$ 40.00</span>
	      </a>
	      <a className="btn btn-default disabled pull-right">
	        <span className="monthly">MONTHLY</span>
	      </a>
      </div>
		)
	}
}






ReactDOM.render(
  <App />,
  document.getElementById('root')
);

