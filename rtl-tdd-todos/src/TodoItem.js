import React, { useCallback, useEffect, useState } from 'react';


const TodoItem = React.memo(({todo,onToggle,onRemove}) => {
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