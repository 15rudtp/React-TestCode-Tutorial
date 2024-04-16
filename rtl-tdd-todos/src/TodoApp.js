import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';



const TodoApp = () => {

    const [todos,setTodos] = useState([{
        id : 1,
        text : "TDD 배우기",
        done : false,
    },
    {
        id : 2,
        text : "react-testing-library 사용하기",
        done : false,
    }]);

    return <div>
        <TodoForm data-testid="helloworld"/>
        <TodoList todos={todos}/>
    </div>
}

export default TodoApp;


