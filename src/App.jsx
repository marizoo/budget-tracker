import React from 'react'
import './App.css'
import Budget from './components/Budget'
import ExpenseList from './components/ExpenseList'
import ExpenseTotal from './components/ExpenseTotal'
import Remaining from './components/Remaining'

const App = () => {
  return (
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

      </div>
    </div>
  )
}

export default App
