import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  //state for the filter
  const [getFilter, setGetFilter] = useState("2021");

  //function to lift the filter state in ExpensesFilter to the Expenses component
  const filterChangeHandlerLiftUp = (filter) => {
    setGetFilter(filter);
    console.log(filter);
  };

  const filteredExpenses = props.arr.filter(
    (element) => element.date.getFullYear().toString() === getFilter
  );

  //printing should be done dynamically fitting to the array size.
  return (
    <div className="expensesFilter">
      <Card className="expenses">
        <ExpensesFilter
          selected={getFilter}
          onFilterChange={filterChangeHandlerLiftUp}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
