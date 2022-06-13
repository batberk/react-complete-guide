import React, {useState} from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [filter, setFilter] = useState("");
  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
    props.onFilterChange(filter);
    // the line below is the same as the line above, except it prints the latest value of the filter.
    // figure why we need filter as a state here.
    //**********  props.onFilterChange(event.target.value);  *******/
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
