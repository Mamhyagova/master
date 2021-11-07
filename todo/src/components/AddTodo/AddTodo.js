import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'



function AddTodo({todo, setTodo}){

    const [value, setValue] = useState('')

    function saveTodo(){
        if (value.trim() !== ''){
        setTodo(
            [...todo,{
                id: uuid(),
                title:value,
                status:true,
            }]
        )
        setValue('')
    } else {
        return
    }}


    return(
        <div>
            <input placeholder= "What needs to be done?" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick= {saveTodo}>Add</button>
        </div>
    )
}

export default AddTodo 