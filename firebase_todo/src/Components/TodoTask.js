import React from 'react';

const TodoTask = props => {
    const {
        todo,
        removeTask,
        isTaskDone,
        editId,
        editTask,
        editedTask,
        handleEditChange,
    } = props;
    return (
        <p key={todo.id}>
            <span className="todo-emoji" role='img' aria-label="delete" onClick={() => removeTask(todo.id)}>❌</span>
            {todo.done === false ?
                <span className="undone" onClick={() => isTaskDone(todo.id)}>UNDONE</span>
                :
                <span className="done" onClick={() => isTaskDone(todo.id)}>DONE</span>
            }
            {editId !== todo.id
                ? <span className="todo-emoji" role='img' aria-label="edit" onClick={() => editTask(todo.id)}>🛠️</span>
                : <span className="todo-emoji" role='img' aria-label="save" onClick={() => editTask(todo.id)}>🆗</span>
            }
            {editId === todo.id
                ?
                <span>
                    <input type="text" value={editedTask} onChange={handleEditChange} />
                </span>
                : todo.task.toString()
            }
        </p>
    )
}

export default TodoTask