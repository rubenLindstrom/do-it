import React from "react";

export interface Props {
	todo: Todo;
	toggleTodo: ToggleTodo;
}

const todoItem: React.FC<Props> = ({
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
