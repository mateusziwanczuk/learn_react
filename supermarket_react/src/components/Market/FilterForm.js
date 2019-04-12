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
                    <option value="">All departments</option>
                    {this.props.departments
                        .sort()
                        .map(department => (
                        <option key={department} value={department}>{department.replace(/_/, ' ')}</option>
                    ))}
                </select>
            </form>
        )
    }
}

export default FilterForm