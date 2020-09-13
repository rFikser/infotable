import React from 'react';

export const Table = (props) => {

    const asc = '▲';
    const desc = '▼';

    return (
        <table className='table table-hover table-sm mt-3'>
            <thead className='thead-dark'>
                <tr>
                    <th style={{cursor: 'pointer'}} onClick={() => props.onSort('id')}>
                        ID {props.sortField === 'id' ? (props.sort === 'asc' ? asc : desc) : null}
                    </th>
                    <th style={{cursor: 'pointer'}} onClick={() => props.onSort('firstName')}>
                        First Name {props.sortField === 'firstName' ? (props.sort === 'asc' ? asc : desc) : null}
                    </th>
                    <th style={{cursor: 'pointer'}} onClick={() => props.onSort('lastName')}>
                        Last Name {props.sortField === 'lastName' ? (props.sort === 'asc' ? asc : desc) : null}
                    </th>
                    <th style={{cursor: 'pointer'}} onClick={() => props.onSort('email')}>
                        E-mail {props.sortField === 'email' ? (props.sort === 'asc' ? asc : desc) : null}
                    </th>
                    <th style={{cursor: 'pointer'}} onClick={() => props.onSort('phone')}>
                        Phone {props.sortField === 'phone' ? (props.sort === 'asc' ? asc : desc) : null}
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(item => (
                    <tr key={item.phone + item.id} onClick={() => props.onSelect(item)} >
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}