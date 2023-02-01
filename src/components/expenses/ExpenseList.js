import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

const ExpenseList = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
