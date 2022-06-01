import Expenses from "./components/Expense-components/Expenses";
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
  return <Expenses arr={expenses} />;
}

export default App;
