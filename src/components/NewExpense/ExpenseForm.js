import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    //console.log(title);
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    //console.log(amount);
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    //console.log(date);
    console.log(event.target.value);
  };
    const addExpenseHandler = (event) => {
      event.preventDefault();
      const addedExpense = {
        newTitle: title,
        newAmount: amount,
        newDate: date,
      };
      setTitle("");
      setAmount("");
      setDate(new Date());
      props.onSubmitNewExpense(addedExpense);
      console.log(addedExpense);
      console.log(addedExpense.newTitle);
      console.log(addedExpense.newAmount);
      console.log(addedExpense.newDate);

    };
  return (
    <form>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>

        <div className="expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="expense-form__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={addExpenseHandler}>Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
