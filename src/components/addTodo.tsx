import React, { useRef } from "react";

export interface Props {
	addTodo: AddTodo;
}

const AddTodo: React.FC<Props> = ({ addTodo }) => {
	const todoRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const node = todoRef.current;
		if (node) {
			const content = node.value;
			if (content) {
				addTodo(node.value);
				node.value = "";
			}
		}
	};

	return (
		<form>
			<input type="text" name="" ref={todoRef} />
			<button onClick={handleSubmit} type="submit">
				Add Todo
			</button>
		</form>
	);
};

export default AddTodo;
