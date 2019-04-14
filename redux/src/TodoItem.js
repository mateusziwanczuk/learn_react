import React from 'react';

const TodoItem = ({children, isCompleted, onDelete, onComplete, id}) => {
    return (
        <div>
            {children}
            <button onClick={ () => onDelete(id) }> DELETE </button>
            <button onClick={ () => onComplete(id) }> COMPLETE </button>
        </div>
    )
}

export default TodoItem