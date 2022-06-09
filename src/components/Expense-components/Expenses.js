import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  //state for the filter
  const [getFilter, setGetFilter] = useState("2021");

  //function to lift the filter state in ExpensesFilter to the Expenses component
  const filterChangeHandlerLiftUp = (filter) => {
    setGetFilter(filter);
    console.log(filter);
  };
  
  
  // TODO print newly added expences passed somehow.
  //printing should be done dynamically fitting to the array size.
  return (
    <div className="expensesFilter">
      <Card className="expenses">
        <ExpensesFilter
          selected={getFilter}
          onFilterChange={filterChangeHandlerLiftUp}
          />
          {props.arr.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} 
      </Card>
    </div>
  );
}

export default Expenses;
