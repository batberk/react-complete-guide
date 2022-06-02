import Expenses from "./components/Expense-components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
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
  return (
    //<NewExpense expenses={expenses} />
    <div>
      <NewExpense />
      <Expenses arr={expenses} />;
    </div>
  );
}

export default App;
