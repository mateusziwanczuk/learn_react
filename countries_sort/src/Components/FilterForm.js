import React from 'react'

class FilterForm extends React.Component {
    state = {
        text: '',
        region: '',
    }
    onInputChange = e => {
        this.setState(
            { text: e.target.value },
            () => this.props.onFilterChange(this.state)
        )
    }
    onSelectChange = e => {
        this.setState(
            { region: e.target.value},
            () => this.props.onFilterChange(this.state)
        )
    }
    render(){
        return (
            <form>
                <input type="text" value={this.state.value} onChange={this.onInputChange} />
                <select onChange={this.onSelectChange}>
                    <option value="">Region</option>
                    {this.props.regions.map(region => (
                        <option key={region} value={region}>{region}</option>
                    ))}
                </select>
            </form>
        )
    }
}

export default FilterForm 