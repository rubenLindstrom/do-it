type Todo = {
	text: string;
	complete: boolean;
	id: number;
};

type ToggleTodo = (id: number) => void;
type AddTodo = (text: String) => void;
