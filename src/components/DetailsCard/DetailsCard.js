import React from 'react';

export const DetailsCard = (props) => {
    const { details } = props
    return (
        <div className='col-sm-5' style={{ margin: '0 auto' }}>
            <div className='card text-center'>
                <p className='card-header'>Выбран пользователь: <b>{details.firstName + ' ' + details.lastName}</b></p>
                <p className='card-text'>
                    Описание:
                    <textarea style={{ width: '100%', minHeight: '75px' }} defaultValue={details.description} />
                </p>

                <p className='card-text'>Адрес проживания: <b>{details.address.streetAddress}</b></p>
                <p className='card-text'>Город: <b>{details.address.city}</b></p>
                <p className='card-text'>Провинция/штат: <b>{details.address.state}</b></p>
                <p className='card-text'>Индекс: <b>{details.address.zip}</b></p>
            </div>
        </div>
    )
}