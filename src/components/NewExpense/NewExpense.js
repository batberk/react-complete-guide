import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
//const NewExpense = (props) => {
const NewExpense = (props) => {
const submitNewExpenseHandler = (addedExpense) => {
  const newExpense = {
    ...addedExpense,
    id: Math.random().toString(),
  };
  props.onNewExpenceAdd(newExpense);
}
//<ExpenseForm expenses={props.expenses}/>
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitNewExpense={submitNewExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
