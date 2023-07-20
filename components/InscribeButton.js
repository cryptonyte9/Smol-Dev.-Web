import React from 'react';

const InscribeButton = ({ onClick }) => {
  return (
    <button
      id="inscribe-button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Inscribe
    </button>
  );
};

export default InscribeButton;