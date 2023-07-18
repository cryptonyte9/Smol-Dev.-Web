import React from 'react';
import InscribeButton from '../components/InscribeButton';
import MintButton from '../components/MintButton';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">BRC721 Token Website</h1>
      <div className="flex space-x-4">
        <InscribeButton />
        <MintButton />
      </div>
    </div>
  )
}