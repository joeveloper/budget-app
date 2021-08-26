import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        {id:1, name:"shopping", cost: 50},
        {id:2, name:"holiday", cost: 300},
        {id:3, name:"transportation", cost: 70},
        {id:4, name:"fuel", cost: 40},
        {id:5, name:"child care", cost: 500}
    ]
    return ( 
        <ul className="list-group">
            {expenses.map((expense => 
                <ExpenseItem
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            ))}
        </ul>
     )
    
}
 
export default ExpenseList;