import React from "react";
import TodoItem from "./todoItem";

interface TodoListProps {
	todos: Array<Todo>;
	toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />
			))}
		</ul>
	);
};

export default TodoList;
