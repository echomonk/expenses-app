import React, { useState } from "react";
import "./Expenses.css";

import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState();

  const handleExpenseFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilterChange={handleExpenseFilterChange}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} onDelete={props.onDelete} />
      </Card>
    </li>
  );
};

export default ExpenseList;
