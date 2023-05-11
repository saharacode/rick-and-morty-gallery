import React from 'react';
import './App.css';
import CharacterGallery from "./CharacterGallery";

export default function App() {

  return (
    <div className="headline">
      <h1>Welcome to the Rick and Morty App</h1>
      <CharacterGallery></CharacterGallery>
    </div>
  );
}
