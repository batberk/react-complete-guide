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
  
    /* {props.arr.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))} */

  // TODO print newly added expences passed somehow.
  //printing should be done dynamically fitting to the array size.
  return (
    <div className="expensesFilter">
      <Card className="expenses">
        <ExpensesFilter
          selected={getFilter}
          onFilterChange={filterChangeHandlerLiftUp}
        />
        <ExpenseItem
          title={props.arr[0].title}
          amount={props.arr[0].amount}
          date={props.arr[0].date}
        />{" "}
        <ExpenseItem
          title={props.arr[1].title}
          amount={props.arr[1].amount}
          date={props.arr[1].date}
        />{" "}
        <ExpenseItem
          title={props.arr[2].title}
          amount={props.arr[2].amount}
          date={props.arr[2].date}
        />
        <ExpenseItem
          title={props.arr[3].title}
          amount={props.arr[3].amount}
          date={props.arr[3].date}
        />
        <ExpenseItem
          title={props.arr[4].title}
          amount={props.arr[4].amount}
          date={props.arr[4].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
