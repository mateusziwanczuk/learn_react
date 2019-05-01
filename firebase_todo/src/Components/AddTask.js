import React from 'react';

class AddTask extends React.Component {
    render() { 
        return (
            <>
                <div>
                    <input 
                        type = 'text' 
                        placeholder = 'Add new task'
                        onChange = { this.props.onInputChange }
                    />
                    <button
                        type = 'submit'
                        onClick = { this.props.addTask }
                    >Add task</button>
                </div>
            </>
        );
    }
}
 
export default AddTask;