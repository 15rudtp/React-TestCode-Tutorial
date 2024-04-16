import React, { useCallback, useEffect, useState } from 'react';


const TodoItem = React.memo(({todo,onToggle,onRemove}) => {
    // 사실 useCallback을 안 해주면 onToggle이랑 onRemove때문에 최적화 하나도 안되고 
    // 오히려 리소스 낭비함 (React.memo는 추가적인 비교 연산이 들어감)
    // 그래서 onToggle같은 함수를 받아서 사용하는데 todo가 변경되었을 때만 리랜더링 하고 싶으면
    // 부모 컴포넌트에서 useCallback으로 최적화 해주어야 함.
    const {id ,text ,done} = todo;
    const toggle = useCallback(()=> onToggle(id) ,[id,onToggle]);
    const remove = useCallback(() => onRemove(id), [id,onRemove]);

    console.log("리랜더링 됨", text);

    return <li>
        <span style={{textDecoration : done ? "line-through" : ""}} 
              onClick={toggle}>{text}</span>
        <button onClick={remove}>삭제</button>
    </li>
});

export default TodoItem;