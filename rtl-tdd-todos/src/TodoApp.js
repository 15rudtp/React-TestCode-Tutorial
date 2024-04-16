import React, { useCallback, useRef, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';



const TodoApp = () => {

    const [todos,setTodos] = useState([{
        id : 1,
        text : "TDD 배우기",
        done : true,
    },
    {
        id : 2,
        text : "react-testing-library 사용하기",
        done : true,
    }]);

    const Id = useRef(3);   // useRef에 담긴 값은 변경 되어도 리랜더링 되지 않습니다.
                            // 리랜더링이 필요없는 값은 useRef에 담아도 될듯.
    
    const onInsert = useCallback((text)=>{
        let Data = {
            id : Id.current,
            text : text,
            done :true,
        }
        setTodos(todos => [...todos,Data]);
        Id.current++;
    },[])

    const onToggle = useCallback(id => {
        setTodos(todos => todos.map(item => item.id === id ? {...item,done : !item.done} : item))
    },[])

    const onRemove = useCallback(id => {
        setTodos(todos => todos.filter(item => item.id !== id))
    },[])

    return <div>
        <TodoForm onInsert={onInsert}/>
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
    </div>
}

export default TodoApp;


