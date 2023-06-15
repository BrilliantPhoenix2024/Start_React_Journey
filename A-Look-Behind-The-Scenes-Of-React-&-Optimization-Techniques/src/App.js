import React, { useState, useCallback, useMemo } from 'react';

import Button from './components/UI/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';
import DemoList from './components/Demo/DemoList';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onclick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
