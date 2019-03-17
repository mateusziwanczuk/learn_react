import React from 'react'

class FilterForm extends React.Component {
    state = {
        text: ''
    }
    onInputChange = e => {
        this.setState(
            { text: e.target.value },
            () => this.props.onFilterChange(this.state)
        )
    }
    render(){
        return (
            <form>
                <input type="text" value={this.state.value} onChange={this.onInputChange} />
            </form>
        )
    }
}

export default FilterForm