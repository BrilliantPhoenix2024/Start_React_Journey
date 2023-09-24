import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, { task: currentTask, completed: false }]);
    inputTask.current.value = "";
    setCurrentTask("");
  };

  const deleteTask = (taskToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task.task !== taskToDelete;
      })
    );
  };

  const completeTask = (taskToComplete) => {
    setTodoList(
      todoList.map((task) => {
        return task.task == taskToComplete
          ? { task: taskToComplete, completed: true }
          : { task: task.task, completed: task.completed ? true : false };
      })
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          ref={inputTask}
          type="text"
          placeholder="Task..."
          onKeyDown={(event) => {
            if (event.keyCode == 13) addTask();
          }}
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {todoList.map((value, key) => {
          return (
            <div id="task">
              <li key={key}>{value.task}</li>
              <button id="complete" onClick={() => completeTask(value.task)}>
                Completed
              </button>
              <button id="delete" onClick={() => deleteTask(value.task)}>
                X
              </button>
              {value.completed ? (
                <h5>Task Completed</h5>
              ) : (
                <h5>Task Not Completed</h5>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
