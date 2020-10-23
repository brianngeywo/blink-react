import React from 'react'

function TodoItem(props) {
    return (
        <div>
            <p>
                {props.todos.title}
            <input type="checkbox" checked={props.todos.completed} />
            <hr/>
            </p>
            
        </div>
    )
}

export default TodoItem