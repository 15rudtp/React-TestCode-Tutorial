import React, { useCallback, useEffect, useState } from 'react';


const TodoItem = ({todo,onToggle,onRemove}) => {
    const [spanStyle,setSpanStyle] = useState('');
    const {id ,text ,done} = todo;
    const toggle = useCallback(()=> onToggle(id) ,[id,onToggle]);
    const remove = useCallback(() => onRemove(id), [id,onRemove]);


    useEffect(()=>{
        if(done)
            setSpanStyle({ textDecoration : 'line-through' });
        else 
            setSpanStyle('');
    },[])


    return <li>
        <span style={{...spanStyle}} onClick={toggle} >{text}</span>
        <button onClick={remove}>삭제</button>
    </li>
}

export default TodoItem;