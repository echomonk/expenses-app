import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const handleSaveExpenseData = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  );
};

export default NewExpense;
