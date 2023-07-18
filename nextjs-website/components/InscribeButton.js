import React from 'react';
import styles from '../styles/InscribeButton.module.css';

const InscribeButton = ({ onInscribe }) => {
  return (
    <button className={styles.button} onClick={onInscribe}>
      Inscribe
    </button>
  );
};

export default InscribeButton;