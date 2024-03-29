import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //--------------------------------------------------------------------------------------//
  //                                    FORM HANDLERS                                     //
  //--------------------------------------------------------------------------------------//

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  /**
   * Handles the form submission
   * @param {*} event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Creates an object with the data from the form
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // Resets the form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // Closes the form
    props.onCancel();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type={"text"}
              value={enteredTitle}
              onChange={handleTitleChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type={"number"}
              value={enteredAmount}
              min="0.01"
              step={"0.01"}
              onChange={handleAmountChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type={"date"}
              value={enteredDate}
              min="2019-01-01"
              max={"2023-12-31"}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
