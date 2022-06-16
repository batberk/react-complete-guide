import { useState } from "react";
import Expenses from "./components/Expense-components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesArr = [];

function App() {
  const removeExpense = (id) => {
    console.log(id)

    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  const [expenses, setExpenses] = useState(expensesArr);

  const addNewExpenseHandler = (passedExpence) => {
    setExpenses((prevExpenses) => {
      return [passedExpence, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onNewExpenceAdd={addNewExpenseHandler} />
      <Expenses arr={expenses} removeExpense={removeExpense} />;
    </div>
  );
}

export default App;
