import React from 'react';

const MintButton = () => {
  const mintToken = async () => {
    try {
      const res = await fetch('/api/mint', {
        method: 'POST',
      });
      const data = await res.json();
      if (data.status === 'MINT_SUCCESS') {
        alert('Token minted successfully');
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <button
      id="mint-button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={mintToken}
    >
      Mint Token
    </button>
  );
};

export default MintButton;