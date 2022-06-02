import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //
  const [title, setTitle] = useState(props.title);

  let amount = props.amount;
  let date = props.date;
  const clickHandler = () => {
    setTitle( title==="Updated" ?  "Updated2": "Updated");
    console.log("clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title and Amount</button>
    </Card>
  );
}

export default ExpenseItem;
