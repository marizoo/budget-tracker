import React from 'react'
import '../App.css'

const ExpenseItem = ({data}) => {
    return (
        <li >
        <div className="expensesList">
          <div className="text">

          <p>{data.name}</p>
          </div>
          <div className="desc">
              <div className="price">${data.cost}</div>
              <button className="deleteIcon">x</button>   
          </div>
       </div>
    </li>
    )
}

export default ExpenseItem
