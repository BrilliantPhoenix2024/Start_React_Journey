import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = event => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.vlaue);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.vlaue);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
