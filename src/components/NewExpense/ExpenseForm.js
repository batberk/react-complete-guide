import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input type="text" />
        </div>
      </div>
      <div className="expense-form__control">
        <label>Amount</label>
        <input type="number" min="0" step="0.01" />
      </div>
        <div className="expense-form__control">
        <label>Date</label>
        <input type="date"  min="2020-01-01" max="2022-12-31" />
        </div>
    </form>
  );
};

export default ExpenseForm;
