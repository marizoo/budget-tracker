import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='theApp'>

    <div className="mainContainer">

    

        <div className="myBudgetContainer">
          <h1 className="budgetTitle">My Budget Planner</h1>
          <div className="budgetContainer">
            <p>Budget: $2000,- </p>
            <button className="editButton">Edit</button>
          </div>
          <div className="remainingContainer">
            <p>Remaining: $1040</p>
          </div>
          <div className="spentContainer">
            <p>Spent so far $960</p>
          </div>
        </div>

        <div className="expensesContainer">
          <h2>Expenses</h2>
          <input className="inputSearch" type="text" placeholder='Type to search...' />
          <ul>
            <li>
              <div className="expensesList">
                <div className="text">

                <p>Shopping</p>
                </div>
                <div className="desc">
                    <div className="price">$50</div>
                    <div className="deleteIcon">x</div>   
                </div>
             </div>
            </li>
            <li>
              <div className="expensesList">
                <div className="text">

                <p>Shopping</p>
                </div>
                <div className="desc">
                    <div className="price">$50</div>
                    <div className="deleteIcon">x</div>   
                </div>
             </div>
            </li>
            <li>
              <div className="expensesList">
                <div className="text">

                <p>Shopping</p>
                </div>
                <div className="desc">
                    <div className="price">$50</div>
                    <div className="deleteIcon">x</div>   
                </div>
             </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App
