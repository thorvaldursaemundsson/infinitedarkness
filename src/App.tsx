import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import { Character } from './components/Character';
import { DialogTitle } from '@material-ui/core';
import { CharacterSheet } from './views/CharacterSheet';
import usePersistentState from './utils/usePersistentState';
const SkillPerkManual = lazy(() => import('./views/SkillPerkManual'));
const GameMaster = lazy(() => import('./views/GameMaster'));
const WorldAndLore = lazy(() => import('./views/WorldAndLore'));
const Wizard = lazy(() => import('./views/Wizard'));
const PlayerManual = lazy(() => import('./views/PlayerManual'));

const App: React.FC = () => {
  const main = 'main';
  const [viewMode, setViewMode] = usePersistentState<string>(main, main);
  const [character, setCharacter] = useState(new Character());
  const characterSheet = 'Character Sheet';
  const playerManual = 'Player Manual';
  const gameMaster = 'Game Master';
  const worldAndLore = 'World & Lore';
  const skillsAndPerks = 'Skills & Perks';
  const wizard = 'Character Wizard';
  const about = 'About';
  let options = [main,
    characterSheet,
    playerManual,
    gameMaster,
    worldAndLore,
    skillsAndPerks,
    wizard,
    about
  ];
  const parseMenu = (choice: string) => setViewMode(choice);

  return (
    <>
      <Menu callback={(option) => parseMenu(option)} options={options} current={viewMode} />
      <div className="page">

        <Conditional shouldView={viewMode === main}>
          <DialogTitle>Infinite Darkness</DialogTitle>
          <p>This webpage is a resource for both players and game masters to run a tabletop game of Infinite Darkness.</p>
          <p>Infinite Darkness is a sci-fi roleplaying game set in a future where humanity has begun to take to the stars, aliens and humans co exist.</p>
          <p>With the discovery of faster than light travel- the ability to visit distant stars became a possibility. But space is still vast beyond imagining, the time it takes to travel is still long.
          Due to the limitations of telescopes most stars in the local neighborhood are still mostly uncharted, very little is known of each system beyond the classification of the star and occationally limited information of a planet.
          </p>
          <p>No body knows what lurks out there and if you can't take a little bloody nose then perhaps you ought to go home and crawl under you bed. It's not safe out there, it's wonderous with treasures to satiete desires both subtle and gross. But it's not for the timid</p>
          <hr/>
          <p>This page uses session storage (similar to cookies) click <span style={{textDecoration: 'underline', color:'red', cursor:'pointer'}} onClick={() => sessionStorage.clear()}>here</span> to purge session manually.</p>
        </Conditional>
        <Conditional shouldView={viewMode === characterSheet}>
          <CharacterSheet characterCallback={(c) => { setCharacter(c); setViewMode('main'); }} initialCharacter={character} />
        </Conditional>
        <Conditional shouldView={viewMode === playerManual}>
          <PlayerManual />
        </Conditional>
        <Conditional shouldView={viewMode === gameMaster}>
          <GameMaster></GameMaster>
        </Conditional>
        <Conditional shouldView={viewMode === worldAndLore}>
          <WorldAndLore></WorldAndLore>
        </Conditional>
        <Conditional shouldView={viewMode === skillsAndPerks}>
          <SkillPerkManual />
        </Conditional>
        <Conditional shouldView={viewMode === wizard}>
          <Wizard />
        </Conditional>
        <Conditional shouldView={viewMode === about}>
          <h2>About</h2>
          <h3>This is a work in progress</h3>
          <p>Author: Thorvaldur Saemundsson</p>
          <p>Technology: ReactJS, github pages</p>
          <p>Project: Infinite Darkness, a sci-fi and fantasy game</p>
          <p>Please formulate any complaints and suggestions in the form of a pull request ;)</p>
          <span style={{ float: 'right', fontSize: '11px' }}>Copyright Thorvaldur Saemundsson</span>
        </Conditional>
      </div>
    </>
  );
}
interface ItemProp {
  shouldView: boolean;
}

const Conditional: React.FC<ItemProp> = ({ shouldView, children }) => {
  if (shouldView) return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
  else return null;
}

interface MenuProps {
  callback: (option: string) => void;
  options: string[];
  current: string;
}

const Menu: React.FC<MenuProps> = (props) => {
  return <div className="pageTop">
    <div className="pageTopInner">
      {props.options.map(option =>
        <Tab active={option === props.current} key={option} onClick={() => props.callback(option)}>{option}</Tab>
      )}
    </div>
  </div>;
}

interface ITabPRops {
  onClick: Function;
  active: boolean;
}

const Tab: React.FC<ITabPRops> = (props) => {
  return <button className={props.active ? 'tab tabActive no-print' : 'tab no-print'} onClick={() => props.onClick()}>{props.children}</button>
}

export default App;
