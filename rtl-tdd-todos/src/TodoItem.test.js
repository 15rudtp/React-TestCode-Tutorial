import React from "react";
import TodoItem from "./TodoItem";
import { fireEvent, render } from "@testing-library/react";

describe('<TodoItem/>',() => {
    // 샘플 프롭스.
    const sampleTodo = {
        id : 1,
        text : 'TDD 배우기',
        done : false
    }


const setup = (props = {}) => {
    const initialProps = { todo : sampleTodo }; //프롭스 세팅
    const utils = render(<TodoItem {...initialProps} {...props}/>); // 프롭스 가상 랜더링
    const { getByText } = utils;
    const todo = props.todo || initialProps.todo;
    const span = getByText(todo.text);
    const button = getByText('삭제');
    return {
        ...utils,
        span,
        button,
    }
}

it ('has span and button', () => {
    const {span, button} = setup();
    expect(span).toBeTruthy();  // span태그가 존재하는지
    expect(button).toBeTruthy(); // button태그가 존재하는지
})

it ('shows line-through on span when done is true', () => {
    const {span} = setup({todo : {...sampleTodo, done : true}});
    expect(span).toHaveStyle('text-decoration : line-through');
});

it ('does not show line-through on span when done is false', () => {
    const {span} = setup({todo : {...sampleTodo, done : false}});
    expect(span).not.toHaveStyle('text-decoration : line-through'); // toHaveStyle : 툭정 스타일이 존재하는지 확인하는 matcher함수.
})
it ('calls onToggle', () => {
    const onToggle = jest.fn();
    const {span} = setup({onToggle});
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
})

it ('calls onRemove', () => {
    const onRemove = jest.fn();
    const {button} = setup({onRemove});
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
})
});