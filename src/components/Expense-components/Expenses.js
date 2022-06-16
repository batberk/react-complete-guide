import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesSortAmount from "./ExpensesSortAmount";

const Expenses = (props) => {
  //state for the filter
  const [getFilter, setGetFilter] = useState("2021");
  const [sortByAmount, setSortByAmount] = useState("last added");

  //function to lift the filter state in ExpensesFilter to the Expenses component
  const filterChangeHandlerLiftUp = (filter) => {
    setGetFilter(filter);
    console.log(filter);
  };

  const sortParameterChangeHandler = (parameter) => {
    setSortByAmount(parameter);
    console.log(parameter);
  };

  const filteredExpenses = props.arr.filter(
    (element) => element.date.getFullYear().toString() === getFilter
  );

  const filterAndSort = (sortByAmount) => {
    switch (sortByAmount) {
      case "last added":
        return filteredExpenses;
      case "increasing":
        return props.arr
          .filter(
            (element) => element.date.getFullYear().toString() === getFilter
          )
          .sort((a, b) => {
            return Number(a.amount) - Number(b.amount);
          });
      case "decreasing":
        return props.arr
          .filter(
            (element) => element.date.getFullYear().toString() === getFilter
          )
          .sort((a, b) => {
            return Number(b.amount) - Number(a.amount);
          });
      default:
        return filteredExpenses;
    }
  };

  const filteredSortedExpenses = filterAndSort(sortByAmount);

  return (
    <div className="expensesFilter">
      <Card className="expenses">
        <ExpensesFilter
          selected={getFilter}
          onFilterChange={filterChangeHandlerLiftUp}
        />
        <ExpensesSortAmount
          selected={sortByAmount}
          onParameterChange={sortParameterChangeHandler}
        />
        <ExpensesList
          items={filteredSortedExpenses}
          removeExpense={props.removeExpense}
        />
      </Card>
    </div>
  );
};

export default Expenses;
