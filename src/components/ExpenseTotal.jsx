import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {

    const {expenses} = useContext(AppContext);

    // dont forget to state 0, as your starting value for the reduce method.
    const totalExpenses = expenses.reduce((total, item) => {
        // return (total = total + item.cost)
        return (total += item.cost);
    }, 0)

    return (
        <div className="spentContainer">
            <p>Spent so far ${totalExpenses}</p>
          </div>
    )
}

export default ExpenseTotal
