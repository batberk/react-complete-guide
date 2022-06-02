import React from "react";
import "./ExpenseForm.css";

const titleChangeHandler = (event) => {
    console.log(event.target.value);
}
const amountChangeHandler = (event) => {
    console.log(event.target.value);
}
const dateChangeHandler = (event) => {
    console.log(event.target.value);
}
const ExpenseForm = () => {
  return (
    <form>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>

        <div className="expense-form__control">
          <label>Amount</label>
          <input type="number" min="0" step="0.01" onChange={amountChangeHandler}/>
        </div>

        <div className="expense-form__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
