import React, {useState, useContext} from 'react'
import '../App.css'
import { AppContext } from '../context/AppContext';

// import {v4 as uuidv4} from 'uuid';
// id: uuidv4();


const AddExpenseForm = () => {
    const {dispatch} = useContext(AppContext)
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();

        const expense = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            cost: parseInt(cost),
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })

        setName('');
        setCost('');
    }

    return (
        <form className='addExpenseForm' onSubmit={onSubmit}>
            <label className="addLabel" htmlFor="name">Name</label>
            <input 
            className='addInput'
            type="text" 
            name="name"
            id="name"
            required
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            />
            <label className="addLabel" htmlFor="cost">Cost</label>
            <input 
             className='addInput'
            type="text" 
            name="cost"
            id="cost"
            required
            value={cost}
            onChange={(ev) => setCost(ev.target.value)}
            />
            <button className="addExpenseButton" type="submit">Save</button>
        </form>
    )
}

export default AddExpenseForm
