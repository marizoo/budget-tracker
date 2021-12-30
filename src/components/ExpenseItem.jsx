import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'
import '../App.css'

const ExpenseItem = ({data}) => {
    const {dispatch} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: data.id,
        })
    }

    return (
        <li >
        <div className="expensesList">
          <div className="text">

          <p>{data.name}</p>
          </div>
          <div className="desc">
              <div className="price">${data.cost}</div>
              <button onClick={handleDeleteExpense} className="deleteIcon">x</button>   
          </div>
       </div>
    </li>
    )
}

export default ExpenseItem
