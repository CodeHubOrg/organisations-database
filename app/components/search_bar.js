import React, {Component} from 'react';

//creates a functional component
//const SearchBar = function(){
//	return <input/>
//}

//creates a class component
//create the searchbar and add all the functionality that the react component has
//Component = React.component
class SearchBar extends Component {
	//New constructor function that defines the state.
	constructor(props){

		super(props);
			//state has a new object with property term. This will have the value of the input search. State must be inside the constructor method.

		this.state = {term: 'Starting value'};
	}

	//define a render method
	render (){
		// it must have a JSX
		//add an event handler to the input field.
	//	return <input onChange = {this.onInputChange} />;//syntaxt to listen to an event on the browser -notice curly braces

		return (
			<div>
      <SearchBar />

			<input
			value = {this.state.term}
			onChange ={event => this.setState({term:event.target.value})} />
			//value of the input:{this.state.term};
			</div>
		)
		//an error function replaces the code in line 16. Rather than creating a new method as in line 20-23.
	}
//creates a second method to the input field.Name convention onNameofElementPlusEvent(). The 'event' parameter is an object.
	//onInputChange(event){
	//	console.log(event.target.value);
	//}

}
//exports the component
export default SearchBar;
