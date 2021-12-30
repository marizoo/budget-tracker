import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'
import '../App.css'

const Remaining = () => {
    const {expenses, budget} = useContext(AppContext);

    // we need to know total expenses first. SInce expenses is an array, we can use the reduce() method. 0 indicates the starting value.
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0)

    //change background color 
    const alertType = totalExpenses > budget ? 'remainingContainer alert' : 'remainingContainer'

    return (
        <div className={alertType}>
            <p>Remaining: ${budget - totalExpenses}</p>
          </div>
    )
}

export default Remaining
