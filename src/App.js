import { useState } from "react";
import Expenses from "./components/Expense-components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesArr = [
  // {
  //   id: "ex1",
  //   title: "Home Insurance",
  //   amount: 442.42,
  //   date: new Date(2022, 5, 23),
  // },
  // {
  //   id: "ex2",
  //   title: "Macbook Air 2020  8 ram 256 ssd",
  //   amount: 855.05,
  //   date: new Date(2022, 5, 23),
  // },
  // {
  //   id: "ex3",
  //   title: "Macbook Air 2020 13.3 inch Bag/Sleeve",
  //   amount: 14.04,
  //   date: new Date(2022, 5, 23),
  // },
  // {
  //   id: "ex4",
  //   title: "GitHub Copilot guess-Macbook Air 2020 13.3 inch Bag/Sleeve",
  //   amount: 14.04,
  //   date: new Date(2022, 5, 23),
  // },
  // {
  //   id: "ex5",
  //   title: "GitHub Copilot guess-Macbook Air 2020 13.3 inch Bag/Sleeve",
  //   amount: 14.04,
  //   date: new Date(2022, 5, 23),
  // },
  // {
  //   id: "ex6",
  //   title: "GitHub Copilot guess-Macbook Air 2020 13.3 inch Bag/Sleeve",
  //   amount: 14.04,
  //   date: new Date(2022, 5, 23),
  // },
];

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
