import React from 'react'
import '../App.css'

const ExpenseItem = ({data}) => {
    return (
        <li key={data.id}>
        <div className="expensesList">
          <div className="text">

          <p>{data.name}</p>
          </div>
          <div className="desc">
              <div className="price">${data.cost}</div>
              <div className="deleteIcon">x</div>   
          </div>
       </div>
    </li>
    )
}

export default ExpenseItem
