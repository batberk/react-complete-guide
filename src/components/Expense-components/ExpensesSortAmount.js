import React from "react";
import "./ExpensesSortAmount.css";

const ExpensesSortAmount = (props) => {

  const sortParameterChangeHandler = (event) => {
    props.onParameterChange(event.target.value);
  };
  return (
    <div className="amount-sort">
      <div className="amount-sort__control">
        <label>Sort by amount or date</label>
        <select value={props.selected} onChange={sortParameterChangeHandler}>
          <option value="last added">default</option>
          <option value="increasing">increasing</option>
          <option value="decreasing">decreasing</option>
          <option value="latest">latest</option>
          <option value="oldest">oldest</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesSortAmount;
