import React from 'react';
import { URL_SHORT, URL_LONG } from '../../Constants'

export const UrlSelection = (props) => {
    return (
        <div className='text-center' style={{marginTop: '100px'}}> 
            <button type='button' className='btn btn-primary mr-5' onClick={() => props.onUrlSelect(URL_SHORT)}>32 элемента</button>
            <button type='button' className='btn btn-primary' onClick={() => props.onUrlSelect(URL_LONG)}>1000 элемента</button>
        </div >
    )
}