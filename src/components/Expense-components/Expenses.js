import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  //state for the filter
  const [getFilter, setGetFilter] = useState("2021");

  //function to lift the filter state in ExpensesFilter to the Expenses component
  const filterChangeHandlerLiftUp = (filter) => {
    setGetFilter(filter);
    console.log(filter);
  };

  //printing should be done dynamically fitting to the array size.
  return (
    <div className="expensesFilter">
      <Card className="expenses">
        <ExpensesFilter
          selected={getFilter}
          onFilterChange={filterChangeHandlerLiftUp}
        />

        {props.arr
          .filter((element) => ((element.date.getFullYear().toString()) === getFilter))
          .map((eachExpense) => (
            <ExpenseItem
              key={eachExpense.id}
              title={eachExpense.title}
              amount={eachExpense.amount}
              date={eachExpense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
