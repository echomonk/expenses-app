import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  //--------------------------------------------------------------------------------------//
  //                                    FORM HANDLERS                                     //
  //--------------------------------------------------------------------------------------//

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  /**
   * Saves the data from the form
   * @param {*} enteredExpenseData
   */
  const handleSaveExpenseData = (enteredExpenseData) => {
    // Creates an object with the data from the form and adds an id to it
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
