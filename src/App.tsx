import React, { useState } from 'react';
import { CharacterSheet } from './components/CharacterSheet';
import './App.css';
import { Character } from './components/Character';
import { Button, DialogTitle } from '@material-ui/core';
import PlayerManual from './components/PlayerManual';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState('main');
  let character = new Character();
  let options = ['view character sheet',
    'player manual',
    'game master',
    'world & lore',
    'skills & perks',
    'about'];
  const MainButton = () => <Button onClick={() => setViewMode('main')}>X</Button>;
  return (
    <div className="App">
      <Conditional shouldView={viewMode === 'main'}>
        <DialogTitle>Infinite Darkness</DialogTitle>
        <Menu callback={(option) => setViewMode(option)} options={options} />
      </Conditional>
      <Conditional shouldView={viewMode === 'view character sheet'}>
        <CharacterSheet characterCallback={(c) => { character = c; setViewMode('main'); }} initialCharacter={character} />
      </Conditional>
      <Conditional shouldView={viewMode === 'player manual'}>
        <DialogTitle>Player manual</DialogTitle>
        <MainButton />
        <PlayerManual />
      </Conditional>
      <Conditional shouldView={viewMode === 'game master'}>
        <DialogTitle>Game master</DialogTitle>
        This page will contain information on how to run a game
        <MainButton />
      </Conditional>
      <Conditional shouldView={viewMode === 'world & lore'}>
        <DialogTitle>World and lore</DialogTitle>
        This page will contain information about the world, the lore, factions, monsters, aliens, etc
        <MainButton />
      </Conditional>
      <Conditional shouldView={viewMode === 'skills & perks'}>
        <DialogTitle>About</DialogTitle>
        This page will contain information about all skills and perks, how to use them and how to make custom skills/perks
        <MainButton />
      </Conditional>
      <Conditional shouldView={viewMode === 'about'}>
        <div style={{textAlign:'left', padding: '50px'}}>
          <h2>About</h2>
          <h3>This is a work in progress</h3>
          <p>Author: Thorvaldur Saemundsson</p>
          <p>Technology: ReactJS, github pages</p>
          <p>Project: Infinite Darkness, a sci-fi and fantasy game</p>
          <p>Please formulate any complaints and suggestions in the form of a pull request ;)</p>
          <span style={{float:'right', fontSize:'11px'}}>Copyright Thorvaldur Saemundsson</span>
        </div>
        <MainButton />
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
