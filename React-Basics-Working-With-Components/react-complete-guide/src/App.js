import React from 'react';

import Expenses from './components/Expenses/Expenses';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 297.69, date: new Date(2028, 2, 9) },
    { title: 'Toilet Paper', amount: 94.12, date: new Date(2023, 2, 9) },
    { title: 'New Desk', amount: 70.69, date: new Date(2023, 9, 9) },
    { title: 'New Laptop', amount: 197.69, date: new Date(2023, 12, 9) },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
