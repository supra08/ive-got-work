import React, {Component} from "react";
import TodoItems from './TodoItems'

class TodoList extends Component
{
	
		constructor(props)
		{
			super(props);
			this.addItem = this.addItem.bind(this);
			this.deleteItem = this.deleteItem.bind(this);
			this.state = {
				items: []
			};
		}
	
		addItem(e){
			if( this._inputElement.value !== ""){
				var newItem = {
					text: this._inputElement.value,
					key: Date.now()
				};

				this.setState((prevState) => 
				{
					return{
						items: prevState.items.concat(newItem)
					};
				});

				this._inputElement.value = "";
			}

			console.log(this.state.items);

			e.preventDefault();
		}

		deleteItem(key)
		{
			var filteredItems = this.state.items.filter(function(item){
				return (item.key !== key);
			});

			this.setState({
				items: filteredItems
			});
		}

	render(){
		return(
				<div class="main-todo">
					<div class="header">
						<form onSubmit={this.addItem}>
							<input type="text" placeholder="enter" ref={(a) => this._inputElement = a}>
							</input>
							<button type="submit">&nbsp;+&nbsp;</button>
						</form>
					</div>
					<TodoItems delete={this.deleteItem} entries={this.state.items} />
				</div>
			);
	}
};

export default TodoList;