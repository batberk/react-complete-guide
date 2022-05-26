import ExpenseItem from "./components/ExpenseItem";

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
      title: "Macbook Air 2020 13.3 Bag/Sleeve",
      amount: 14.04,
      date: new Date(2022, 5, 23),
    },
  ];
  return (
    <div>
      <h1>Let's get starteddddd!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />{" "}
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />{" "}
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
