import React from "react";

import { configure, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddTodoForm, { Props } from "./addTodo";

configure({ adapter: new Adapter() });

describe("<AddTodo />", () => {
	it("should render empty input field", () => {
		const wrapper = shallow(<AddTodoForm addTodo={() => {}} />);
		expect(wrapper);
	});
});
