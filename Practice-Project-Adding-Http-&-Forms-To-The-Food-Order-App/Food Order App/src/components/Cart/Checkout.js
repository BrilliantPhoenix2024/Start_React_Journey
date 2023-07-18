import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const confimHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confimHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
      </div>

      <div className={styles.control}>
        <label htmlFor="address">Street</label>
        <input type="text" id="address"></input>
      </div>

      <div className={styles.control}>
        <label htmlFor="postal">postal Code</label>
        <input type="text" id="postal"></input>
      </div>

      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city"></input>
      </div>

      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
