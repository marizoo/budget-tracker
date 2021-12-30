import React, {useContext} from 'react'
import '../App.jsx'
import ExpenseItem from './ExpenseItem.jsx';
import { AppContext } from '../context/AppContext.jsx';



const ExpenseList = () => {

    const {expenses} = useContext(AppContext);

  
    return (
        <ul>
            {expenses.map(expense => (
               <ExpenseItem data={expense} key={expense.id}/>
            ) )}
      </ul>
    )
}

export default ExpenseList
