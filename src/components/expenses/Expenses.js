import React, { useState } from "react";
import "./Expenses.css";

import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("ALL");

  const handleExpenseFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      {filteredYear === "ALL" ? (
        <React.Fragment>
          <ExpensesFilter
            selected={filteredYear}
            onExpenseFilterChange={handleExpenseFilterChange}
          />
          <ExpensesChart expenses={props.items} />
          <ExpensesList items={props.items} onDelete={props.onDelete} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ExpensesFilter
            selected={filteredYear}
            onExpenseFilterChange={handleExpenseFilterChange}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} onDelete={props.onDelete} />
        </React.Fragment>
      )}
    </Card>
  );
};

export default ExpenseList;
