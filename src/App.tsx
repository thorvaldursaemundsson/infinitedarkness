import React, { useState } from 'react';
import { CharacterSheet } from './components/CharacterSheet';
import './App.css';
import { Character } from './components/Character';
import { Button, DialogTitle } from '@material-ui/core';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState('main');
  let character = new Character();
  let options = ['character',
    'player manual',
    'game master',
    'world & lore'];

  return (
    <div className="App">
      <Conditional shouldView={viewMode === 'main'}>
        <DialogTitle>Infinite Darkness</DialogTitle>
        <Menu callback={(option) => setViewMode(option)} options={options} />
      </Conditional>
      <Conditional shouldView={viewMode === 'character'}>
        <CharacterSheet characterCallback={(c) => { character = c; setViewMode('main'); }} initialCharacter={character} />
      </Conditional>
      <Conditional shouldView={viewMode === 'player manual'}>
        player manual, work in progress...
        <Button onClick={() => setViewMode('main')}>X</Button>
      </Conditional>
      <Conditional shouldView={viewMode === 'game master'}>
        game master, work in progress...
        <Button onClick={() => setViewMode('main')}>X</Button>
      </Conditional>
      <Conditional shouldView={viewMode === 'world & lore'}>
        world & lore, work in progress...
        <Button onClick={() => setViewMode('main')}>X</Button>
      </Conditional>
    </div>
  );
}
interface ItemProp {
  shouldView: boolean;
}

const Conditional: React.FC<ItemProp> = ({ shouldView, children }) => {
  if (shouldView) return <div>{children}</div>;
  else return null;
}

interface MenuProps {
  callback: (option: string) => void;
  options: string[];
}

const Menu: React.FC<MenuProps> = (props) => {
  return <div>{props.options.map(option => <Button onClick={() => props.callback(option)}>{option}</Button>)}</div>;
}

export default App;
