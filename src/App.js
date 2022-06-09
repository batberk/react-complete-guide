import { useState } from "react";
import Expenses from "./components/Expense-components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  
  const expensesArr = [
    {
      id: "ex1",
      title: "Home Insurance",
      amount: 442.42,
      date: new Date(2022, 5, 23),
    },
    {
      id: "ex2",
      title: "Macbook Air 2020  8 ram 256 ssd",
      amount: 855.05,
      date: new Date(2022, 5, 23),
    },
    {
      id: "ex3",
      title: "Macbook Air 2020 13.3 inch Bag/Sleeve",
      amount: 14.04,
      date: new Date(2022, 5, 23),
    },
    {
      id: "ex4",
      title: "GitHub Copilot guess-Macbook Air 2020 13.3 inch Bag/Sleeve",
      amount: 14.04,
      date: new Date(2022, 5, 23),
    },
    {
      id: "ex5",
      title: "GitHub Copilot guess-Macbook Air 2020 13.3 inch Bag/Sleeve",
      amount: 14.04,
      date: new Date(2022, 5, 23),
    },
  ];
  const [expenses, setExpenses] = useState(expensesArr);
  const addNewExpenseHandler = (passedExpence) => {
    setExpenses([...expenses, passedExpence]);
    console.log("this is in the addNewExpenseHandler");
    console.log(passedExpence);
    console.log(expenses);
    console.log("testtesttest");
  };
  return (
    <div>
      <NewExpense onNewExpenceAdd={addNewExpenseHandler} />
      <Expenses arr={expenses} />;
    </div>
  );
}

export default App;
