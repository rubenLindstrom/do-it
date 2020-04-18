import React from "react";
import TodoItem from "./todoItem";

export interface Props {
	todos: Array<Todo>;
	toggleTodo: ToggleTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />
			))}
		</ul>
	);
};

export default TodoList;
