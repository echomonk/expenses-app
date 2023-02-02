import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

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
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default ExpenseList;
