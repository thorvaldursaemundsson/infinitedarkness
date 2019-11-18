import React, { useState } from 'react';
import { CharacterSheet } from './components/CharacterSheet';
import './App.css';
import { Character } from './components/Character';
import { Button } from '@material-ui/core';

const App: React.FC = () => {
  const [viewMode,setViewMode] = useState('main');
  let character = new Character();

  return (
    <div className="App">
      {viewMode === 'main' ? <Button onClick={() => setViewMode('character')}>View Character Sheet</Button> : <CharacterSheet characterCallback={(c) => {character = c; setViewMode('main');}} initialCharacter={character}></CharacterSheet>}
    </div>
  );
}

export default App;
