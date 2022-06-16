import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [addedTitle, setTitle] = useState("");
  const [addedAmount, setAmount] = useState("");
  const [addedDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log("title chaneged");
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    console.log("amount chaneged");
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    console.log("date chaneged");
    console.log(event.target.value);
  };
  const addExpenseHandler = (event) => {
    event.preventDefault();
    const addedExpense = {
      title: addedTitle,
      amount: addedAmount,
      date: new Date(addedDate),
    };
    setTitle("");
    setAmount("");
    setDate(new Date());
    props.onSubmitNewExpense(addedExpense);
    console.log(addedExpense);
    console.log(addedExpense.title);
    console.log(addedExpense.amount);
    console.log(addedExpense.date);
  };
  return (
    <form onSubmit={addExpenseHandler}>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input type="text" value={addedTitle} onChange={titleChangeHandler} />
        </div>

        <div className="expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            value={addedAmount}
            min="0"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="expense-form__control">
          <label>Date</label>
          <input
            type="date"
            value={addedDate}
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onFormClose}>Cancel</button>
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
