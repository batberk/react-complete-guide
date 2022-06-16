const FilterSortExpenses = (props) => {
  const filterAndSortExpenses = (expenses, expensesFilter, sortParameter) => {
    switch (sortParameter) {
      case "last added":
        props.filteredSortedExpensesHandlerLiftUp(
          expenses.filter(
            (element) =>
              element.date.getFullYear().toString() === expensesFilter
          )
        );
        break;
      case "increasing":
        props.filteredSortedExpensesHandlerLiftUp(
          expenses
            .filter(
              (element) =>
                element.date.getFullYear().toString() === expensesFilter
            )
            .sort((a, b) => {
              return (Number(a.amount) - Number(b.amount));
            })
        );
        break;
      case "decreasing":
        props.filteredSortedExpensesHandlerLiftUp(
          expenses
            .filter(
              (element) =>
                element.date.getFullYear().toString() === expensesFilter
            )
            .sort((a, b) => {
               return (Number(b.amount) - Number(a.amount));
            })
        );
        break;
      default:
        props.filteredSortedExpensesHandlerLiftUp(
          expenses.filter(
            (element) =>
              element.date.getFullYear().toString() === expensesFilter
          )
        );
        break;
    }
  };
  return filterAndSortExpenses(
    props.expenses,
    props.filter,
    props.sortParameter
  );
};

export default FilterSortExpenses;
