import React, { useState } from "react";
import "./app.css";
import TodoList from "./components/todoList";

const initialTodos: Array<Todo> = [
	{ text: "Walk the dog", complete: true, id: 0 },
	{ text: "Write app", complete: false, id: 1 }
];

const App: React.FC = () => {
	const [todos, setTodos] = useState(initialTodos);

	const toggleTodo: ToggleTodo = (id) => {
		setTodos((prevState) =>
			prevState.map((todo) =>
				todo.id === id ? { ...todo, complete: !todo.complete } : todo
			)
		);
	};

	return <TodoList todos={todos} toggleTodo={toggleTodo} />;
};

export default App;
