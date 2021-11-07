import React from 'react';

function TodoList({ todo, setTodo }) {


    function deleteTodo(id) {
        let newTodo=[ ...todo].filter(item =>item.id!==id)
        setTodo(newTodo)
    }

    function statusTodo (id) {
        let newTodo=[ ...todo].filter(item =>{
            if (item.id ===id){
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    
    return (
        <ul>{
            todo.map(item => (
                <li key={item.id}>
                <div class="container">
                    <input id="test" type="checkbox" onClick={() => statusTodo(item.id)}></input>
                    <label for="test" >{item.title}</label>
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </div>
                </li>
            ))
        }
        </ul>
    )
}

export default TodoList