import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newexpense/NewExpense";
import { useAccount } from "wagmi";
import WagmiConnect from "./components/web3/WagmiConnect";
import { disconnect } from "@wagmi/core";
import AddressCard from "./components/ui/AddressCard";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = (props) => {
  const { address, isConnected } = useAccount();
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  /**
   * Adds a new expense to the expenses array
   * @param expense - the new expense to add
   */
  const handleAddExpenseData = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  /**
   * Deletes an expense from the expenses array
   * @param expenseId - the id of the expense to delete
   */
  const handleDeleteExpense = (expenseId) => {
    const updatedExpenses = expenses.filter((expense) => {
      return expense.id !== expenseId;
    });
    setExpenses(updatedExpenses);
  };

  const handleDisconnect = async () => {
    await disconnect();
  };

  return (
    <div>
      {isConnected ? (
        <div>
          <AddressCard address={address} disconnect={handleDisconnect} />
          <NewExpense onAddExpenseData={handleAddExpenseData} />
          <Expenses
            selectedYear={props.filteredYear}
            items={expenses}
            onDelete={handleDeleteExpense}
          />
        </div>
      ) : (
        <WagmiConnect />
      )}
    </div>
  );
};

export default App;
