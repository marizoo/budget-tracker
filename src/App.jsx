import React from 'react'
import './App.css'
import AddExpenseForm from './components/AddExpenseForm'
import Budget from './components/Budget'
import ExpenseList from './components/ExpenseList'
import ExpenseTotal from './components/ExpenseTotal'
import Remaining from './components/Remaining'
import { AppProvider } from './context/AppContext'

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
