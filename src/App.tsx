import React from 'react';
import {CharacterSheet} from './components/CharacterSheet';
import './App.css';
import { Character } from './components/Character';

const App: React.FC = () => {
  let character = new Character();
  return (
    <div className="App">
     <CharacterSheet  initialCharacter={character}></CharacterSheet>
    </div>
  );
}

export default App;
