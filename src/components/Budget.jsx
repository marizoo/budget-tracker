import React, {useContext} from 'react'
import '../App.css'
import { AppContext } from '../context/AppContext'

const Budget = () => {
  const {budget} = useContext(AppContext);

    return (
        <div className="budgetContainer">
        <p>Budget: ${budget} </p>
        <button className="editButton">Edit</button>
      </div>
    )
}

export default Budget
