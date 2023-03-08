import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>let's get started!</p>
      </header>
      {/* This is a Custom made Components (an HTML element) with just starting with uppercase Character */}
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
