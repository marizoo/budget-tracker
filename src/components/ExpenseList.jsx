import React, {useState} from 'react'
import '../App.jsx'
import ExpenseItem from './ExpenseItem.jsx';

const EXPENSES_DATA = [ 
    {id: 1231231, name: "Shopping", cost: 50},
    {id: 1231232, name: "Holiday", cost: 300},
    {id: 1231233, name: "Transportation", cost: 70},
    {id: 1231234, name: "Fuel", cost: 40},
    {id: 1231235, name: "Child Care", cost: 500},
]

const ExpenseList = () => {

    const [datas, setDatas] = useState(EXPENSES_DATA);

    return (
        <ul>
            {datas.map( data => (
               <ExpenseItem data={data}/>
            ) )}
        
        
      </ul>
    )
}

export default ExpenseList
