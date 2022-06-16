import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
//const NewExpense = (props) => {
const NewExpense = (props) => {
  const [foröOpen, setFormOpen] = React.useState(false);

  const formOpenHandlerTrue = () => {
    setFormOpen(true);
  };

  const formOpenHandlerFalse = () => {
    setFormOpen(false);
  };

  const submitNewExpenseHandler = (addedExpense) => {
    const newExpense = {
      ...addedExpense,
      id: Math.random().toString(),
    };
    props.onNewExpenceAdd(newExpense);
  };
  return (
    <div className="new-expense">
      {foröOpen ? (
        <ExpenseForm
          onSubmitNewExpense={submitNewExpenseHandler}
          onFormClose={formOpenHandlerFalse}
        />
      ) : (
        <button onClick={formOpenHandlerTrue}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
