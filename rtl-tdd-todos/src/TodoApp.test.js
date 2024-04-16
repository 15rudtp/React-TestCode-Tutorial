import TodoApp from "./TodoApp";
import {render, fireEvent} from "@testing-library/react";

// TodoApp.test.js는 지금까지 진행한 모든 테스트 코드를 종합적으로 테스트하는 테스트 코드임

/**
 * 1번째 테스트 : TodoForm과 TodoList가 렌더링 되었는지 확인하는 테스트
 */

describe('<TodoApp/>', () => {


    it('renders TodoForm and TodoList', () => {
        const {getByText, getByTestId} = render(<TodoApp />);
        getByText('등록'); // TodoForm 존재유무 확인.
        getByTestId("TodoList"); // TodoList 존재유무 확인.
    })


    it('renders two defaults todos', () => {
        const { getByText } = render(<TodoApp />);
        getByText("TDD 배우기");
        getByText("react-testing-library 사용하기");
    })


    it('creates new todo', () => {
        const { getByText, getByPlaceholderText } = render(<TodoApp/>);
        fireEvent.change(getByPlaceholderText("할 일을 입력하세요"),{
            target : {
                value : '새 항목 추가하기'
            }
        })
        fireEvent.click(getByText("등록"));
        getByText('새 항목 추가하기');
    })

    it('toggles todo', () => {
        const {getByText} = render(<TodoApp/>);
        const todoText = getByText('TDD 배우기');
        expect(todoText).toHaveStyle('text-decoration: line-through;');
        fireEvent.click(todoText);
        expect(todoText).not.toHaveStyle('text-decoration: line-through;');
        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: line-through;');
    })

    it('removes todo', () => {
        const { getByText } = render(<TodoApp/>);
        const todoText = getByText("TDD 배우기");
        const button = todoText.nextSibling;
        fireEvent.click(button);
        expect(todoText).not.toBeInTheDocument(); // todoText요소가 HTML내에서 사라졌는지 체크.
    })
})