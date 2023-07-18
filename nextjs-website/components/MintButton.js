import React from 'react';
import styles from '../styles/MintButton.module.css';
import { mintToken } from '../utils/brc721';

const MintButton = () => {
  const handleMint = async () => {
    try {
      await mintToken();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className={styles.mintButton} onClick={handleMint}>
      Mint BRC721 Token
    </button>
  );
};

export default MintButton;