import React from 'react'

function TodoItem(props) {
    const completedStyle = {
        color: "#FF0000",
        textDecoration: "line-through",
        font: "italic"
    }
    const uncompletedStyle = {
        color: "#008000"
    }
    return (
        <div>
            <p style={props.item.completed ? completedStyle : uncompletedStyle}>
                {props.item.title}
            <input 
            type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)}
             />
            
            <hr/>
            </p>
            
        </div>
    )
}

export default TodoItem