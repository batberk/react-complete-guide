import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteButtonHandler = () => {
    props.removeExpense(props.id);
  };
  //
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={deleteButtonHandler}>delete expense</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
