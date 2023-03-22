import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { title: 'Car Insurance', amount: 297.69, date: new Date(2028, 2, 9) },
  { title: 'Toilet Paper', amount: 94.12, date: new Date(2023, 2, 9) },
  { title: 'New Desk', amount: 70.69, date: new Date(2023, 9, 9) },
  { title: 'New Laptop', amount: 197.69, date: new Date(2023, 12, 9) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
