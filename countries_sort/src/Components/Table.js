import React from 'react'

const Table = props => {
    const countries = props.countries;
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Region</th>
                    <th>Population</th>
                    <th>Area</th>
                </tr>
            </thead>
            <tbody>
                {countries.map(country => (
                    <tr key = {country.id}>
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