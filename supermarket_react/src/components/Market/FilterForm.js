import React from 'react'

class FilterForm extends React.Component {
    state = {
        text: '',
        department: '',
    }
    onInputChange = e => {
        this.setState(
            { text: e.target.value },
            () => this.props.onFilterChange(this.state)
        )
    }
    onSelectChange = e => {
        this.setState(
            { department: e.target.value },
            () => this.props.onFilterChange(this.state)
        )
    }
    render(){
        return (
            <form>
                <input type="text" value={this.state.value} onChange={this.onInputChange} />
                <select onChange={this.onSelectChange}>
                    <option value="">Department</option>
                    {this.props.departments
                        .map(department => (
                        <option key={department} value={department}>{department.replace(/_/, ' ')}</option>
                    ))}
                    {console.log(this.props.departments)}
                </select>
            </form>
        )
    }
}

export default FilterForm