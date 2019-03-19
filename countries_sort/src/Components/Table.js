import React from 'react'

const Table = props => {
    const {countries, order: {field, dir}} = props;
    const createOnHeaderClick = fieldToOrderBy => {
        return () => {
            let dirToSet;
            if (fieldToOrderBy === field) {
                dirToSet = dir === 'ASC' ? 'DESC' : 'ASC'
            } else {
                dirToSet = 'ASC'
            }
            props.onOrderChange({
                field: fieldToOrderBy,
                dir: dirToSet,
            })
        }
    }
    const arrow = dir === 'ASC' ? '⯆' : '⯅';
    return(
        <table>
            <thead>
                <tr>
                    <th onClick={createOnHeaderClick('name')}>
                        Name { field === 'name' && arrow } </th>
                    <th onClick={createOnHeaderClick('capital')}>
                        Capital { field === 'capital' && arrow }</th>
                    <th onClick={createOnHeaderClick('region')}>
                        Region { field === 'region' && arrow }</th>
                    <th onClick={createOnHeaderClick('population')}>
                        Population { field === 'population' && arrow }</th>
                    <th onClick={createOnHeaderClick('area')}>
                        Area { field === 'area' && arrow }</th>
                </tr>
            </thead>
            <tbody>
                {countries.map(country => (
                    <tr key = {Math.random()}>
                        <td>{country.name}</td>
                        <td>{country.capital}</td>
                        <td>{country.region}</td>
                        <td>{country.population}</td>
                        <td>{country.area}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table; 