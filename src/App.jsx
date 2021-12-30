import React from 'react'
import './App.css'
import AddExpenseForm from './components/AddExpenseForm'
import Budget from './components/Budget'
import ExpenseList from './components/ExpenseList'
import ExpenseTotal from './components/ExpenseTotal'
import Remaining from './components/Remaining'
import { AppProvider } from './context/AppContext'

// todo 1.
//the challenge is to edit the budget, that will then also re render the remaining component!
// inside the app context, you will need an action to update this budget.
// todo 2.
// under the "Expenses title", add a search input to search for a specific expenses on the list.
// write something in ExpenseList.jsx, here, you want something that filters down the list, based on the name.
// tips: it uses a string function to check if a string contains a string. 
// its all in the completed code :-)


const App = () => {
  return (
    <AppProvider>
      <div className='theApp'>
        <div className="mainContainer">
            <div className="myBudgetContainer">
              <h1 className="budgetTitle">My Budget Planner</h1>
                <Budget />
                <Remaining />
                <ExpenseTotal />
            </div>

            <div className="expensesContainer">
              <h2>Expenses</h2>
              <input className="inputSearch" type="text" placeholder='Type to search...' />
            <ExpenseList />
            </div>

            <div className="addExpenseContainer">
              <h2>Add Expense</h2>
              <AddExpenseForm />
            </div>
          </div>
      </div>
    </AppProvider>
  )
}

export default App
