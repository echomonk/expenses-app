import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No Expense to display for the given year!
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          onDelete={props.onDelete}
          itemToDelete={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
