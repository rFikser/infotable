import React, { useState } from 'react'

export const Search = (props) => {
    const [value, setValue] = useState('')
    const valueChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className="form-inline my-2 my-lg-0">
            <input onChange={valueChange} value={value} className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button onClick={() => props.handleSearch(value)} className="btn btn-success my-2 my-sm-0">Search</button>
        </div>
    )
}
