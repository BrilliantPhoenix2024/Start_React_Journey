import './ExpenseItem.css';

// A Components in React is just a JavaScript Function.
function ExpenseItem() {
  const expenseDate = new Date(2032, 2, 9);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 297.69;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
