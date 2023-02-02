import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      {!isFormVisible && (
        <button onClick={handleOpenForm}>Add New Expense</button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleCloseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
