import React, { useState } from 'react';
import './addmodal.css'

export const AddRowModal = (props) => {

    const [newContact, setNewContact] = useState({});
    
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const handleChange = (e) => {
        if (e.target.name === 'streetAdress' || e.target.name === 'city' || e.target.name === 'state' || e.target.name === 'zip') {
            setNewContact({ ...newContact, adress: { ...newContact.adress, [e.target.name]: e.target.value } })
        } else {
            setNewContact({ ...newContact, id: randomInt(1000, 10000), [e.target.name]: e.target.value })
        }
    }

    return (
        <div className='modal-back'>
            <div className='modal-wrapper'>
                <div className='modal-header'>
                    <h5 className='card-title'>Добавить контакт</h5>
                    <button onClick={props.closeModal} className='btn btn-secondary'>x</button>
                </div>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <div className='row'>
                            <div className='col'>
                                <input onChange={handleChange} id='firstName' name='firstName' className='form-control mb-2' type='text' placeholder='First Name' />
                            </div>
                            <div className='col'>
                                <input onChange={handleChange} id='secondName' name='secondName' className='form-control mb-2' type='text' placeholder='Second Name' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <input onChange={handleChange} id='email' name='email' className='form-control mb-2' type='email' placeholder='E-mail' />
                            </div>
                            <div className='col'>
                                <input onChange={handleChange} id='phone' name='phone' className='form-control ' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' type='tel' placeholder='Phone' />
                            </div>
                        </div>
                        <div className='row'>
                            <p className='card-title ml-3'>Adress:</p>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <input onChange={handleChange} id='streetAddress' name='streetAddress' className='form-control mb-2' type='text' placeholder='Street Address' />
                            </div>
                            <div className='col'>
                                <input onChange={handleChange} id='city' name='city' className='form-control mb-2' type='text' placeholder='City' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <input onChange={handleChange} id='state' name='state' className='form-control mb-2' type='text' placeholder='State' />
                            </div>
                            <div className='col'>
                                <input onChange={handleChange} id='zip' name='zip' className='form-control mb-2' type='text' placeholder='Zip' />
                            </div>
                        </div>
                        <div className='row'>
                            <p className='card-title ml-3'>Description</p>
                        </div>
                        <div className='row'>
                            <textarea onChange={handleChange} id='description' name='description' className='form-control ml-3 mr-3' type='textarea' placeholder='Description' />
                        </div>
                        <div className='row justify-content-end mt-3'>
                            {
                                newContact.id && newContact.firstName && newContact.secondName && newContact.email && newContact.phone && newContact.description && newContact.adress
                                    ? <button className='btn mr-3 btn-success' onClick={() => props.addRow(newContact)}>Добавить</button>
                                    : <button className='btn mr-3 btn-secondary' disabled onClick={() => props.addRow(newContact)}>Добавить</button>

                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}