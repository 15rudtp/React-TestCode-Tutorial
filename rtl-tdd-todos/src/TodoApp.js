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
        /*
            useCallback에서 의존성 배열 비우고 이렇게 쓰면 무조건 버그 발생
            setTodos(todos.map(item => item.id === id ? {...item,done : !item.done} : item))
        */
            setTodos(todos => todos.map(item => item.id === id ? {...item, done : !item.done} : item));
        // useCallback은 함수 자체를 메모이제이션한다고 생각하면 됨.
        // setState(!prev) 이런식으로 이전 값을 감지하지 않고 setter함수를 사용한다는 것은 
        // 그냥 초기값만을 가지고 값을 변경한다고 생각하면 됨.
        // 즉 초기 초기 값도 메모이제이션 된다고 생각하면 됨.
        // 이렇게 사용하기 위해서는 의존성 배열에 변경 값을 넣어 주어야 하는데(prev의 값을 재조정 해야 하니까)
        // 그러면 또 React.memo에 함수가 들어있는 경우 최적화에 아무 도움이 안 됨. (todos를 사용한다는 가정하에)
        // 함수를 최적화하려면(함수의 메모리 위치 변경으로 인한 리랜더링을 방지하려면)
        // 의존성 배열을 빈 배열로 유지하고 setState(prev => !prev)이런 식으로 이전 값을 
        // 참조하는 방법으로 사용 해야 함.
        // 그렇게 하면 변경된 값을 감지 가능할 뿐더러 함수의 메모리 재할당을 막아 의도한대로 
        // 최적화가 가능함.
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


