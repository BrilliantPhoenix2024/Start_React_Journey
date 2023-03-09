import './ExpenseItem.css';

// A Components in React is just a JavaScript Function.
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 8th 2032</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
