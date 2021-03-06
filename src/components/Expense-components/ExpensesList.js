import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No expenses found</p>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((eachExpense) => (
        <ExpenseItem
          key={eachExpense.id}
          title={eachExpense.title}
          amount={eachExpense.amount}
          date={eachExpense.date}
          id={eachExpense.id}
          removeExpense={props.removeExpense}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
