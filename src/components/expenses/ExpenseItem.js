import React from "react";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const handleDelete = () => {
    props.onDelete(props.itemToDelete);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>

      <button onClick={handleDelete}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
