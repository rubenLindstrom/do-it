import React from "react";

interface TodoItemProps {
	todo: Todo;
	toggleTodo: ToggleTodo;
}

const todoItem: React.FC<TodoItemProps> = ({
	todo: { text, complete, id },
	toggleTodo
}) => {
	return (
		<li>
			<label className={complete ? "complete" : undefined}>
				<input
					type="checkbox"
					checked={complete}
					onChange={() => toggleTodo(id)}
				/>
				{text}
			</label>
		</li>
	);
};

export default todoItem;
