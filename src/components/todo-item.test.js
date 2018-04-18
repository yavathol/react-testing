import { shallow } from 'enzyme';
import React from 'react';
import {TodoItem} from "./todo-item";

describe('TodoItem', () => {
    const todo = {id:1, title: 'Something'};

    it('should render layout', () => {
        const wrapper = shallow (<TodoItem item={todo}/> );

        expect(wrapper).toMatchSnapshot();
    });

    it('should invoke removeTodo after click on button', () => {
        const removeTodo = jest.fn();

        const wrapper = shallow (<TodoItem item={todo}/> );

        wrapper.find('button').simulate('click');

        expect(removeTodo).toHaveBeenCallwdWith(1);
    })
});