import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// A Components in React is just a JavaScript Function.
const ExpenseItem = props => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
