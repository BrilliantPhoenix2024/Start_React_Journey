import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// A Components in React is just a JavaScript Function.
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      {/* <ExpenseDate /> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
