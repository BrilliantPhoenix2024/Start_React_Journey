import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        {/* <img src="https://some-url.com/to-some-image.jpg"></img> */}
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
