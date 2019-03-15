import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
	todos,
	onDeleted,
	onToggleImportant,
	onToggleDone
}) => {

	const elements = todos.map((item) => {
		const { id, hide, ...itemProps } = item;
		let liClassName = 'list-group-item';

		if (hide) {
			liClassName += ' d-none';
		}

		return (
			<li className = { liClassName } key = { id }>
				<TodoListItem 
					{...itemProps}
					onDeleted = {() => onDeleted(id)}
					onToggleImportant = {() => onToggleImportant(id)}
					onToggleDone = {() => onToggleDone(id)}
				/>
			</li>
		);		
	});

	return (
	  <ul className="list-group">
			{ elements }
	  </ul>
		
	); 
};

export default TodoList;