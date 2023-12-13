import React, { useState } from 'react';
import styles from './counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button className={styles.btn} onClick={handleClick}>
        +
      </button>
    </div>
  );
};
