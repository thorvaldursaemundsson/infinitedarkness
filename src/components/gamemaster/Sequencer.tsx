import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Sequencer: React.FC = () => {
    const [characters, setCharacters] = useState<CharacterLabel[]>([]);
    const [mode, setMode] = useState('none');
    return <div>
        <h2>Characters</h2>
        {characters.map(c => {
            return <p><b>{c.name}</b> ({c.sequenceBonus})</p>
        })}
        <CharacterAdder callback={c => setCharacters([...characters, c])} ></CharacterAdder>
        <hr />
        <h3>Start</h3>
        <Button onClick={() => setMode('ambush')}>Ambush</Button>
        <Button onClick={() => setMode('surprise')}>Surprise</Button>
        <Button onClick={() => setMode('known')}>Known</Button>
        <Button onClick={() => setMode('counterAmbush')}>Counter Ambush</Button>
        <Button onClick={() => setMode('none')}>Reset</Button>
        {mode !== 'none' ?
            <SequenceViewer attackers={characters.filter(c => c.side === 'attackers')} defenders={characters.filter(c => c.side === 'defenders')} mode={mode} />
            : null
        }
    </div>
}

interface ICharacterAdderProps {
    callback: (item: CharacterLabel) => void;
}

const CharacterAdder: React.FC<ICharacterAdderProps> = (props) => {
    const [characterName, setCharacterName] = useState('');
    const [sequenceBonus, setSequenceBonus] = useState('0');

    const add = (side: string) => {
        props.callback({ name: characterName, sequenceBonus: parseInt(sequenceBonus), side: side });
        setCharacterName('');
        setSequenceBonus('0');
    }

    return <div>
        <TextField label='character name' value={characterName} onChange={(e) => setCharacterName(e.target.value)}></TextField>
        <TextField label='sequence bonus' value={sequenceBonus} onChange={(e) => setSequenceBonus(e.target.value)}></TextField>

        <Button onClick={() => add('attackers')}>Add attacker</Button>
        <Button onClick={() => add('defenders')}>Add defender</Button>
    </div>
}

interface CharacterLabel {
    name: string;
    sequenceBonus: number;
    side: string | 'attacker' | 'defender';
}

interface ISequence {
    attackers: CharacterLabel[];
    defenders: CharacterLabel[];
    mode: string | 'none' | 'ambush' | 'surprise' | 'known' | 'counterAmbush';
}

interface CharacterData extends CharacterLabel {
    roll: number;
    contextBonus: number;
}

const diceRoll = () => {
    return Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 10) + 1;
}
const getContextBonus = (side: string, mode:string) => {
    switch (mode) {
        case 'ambush': return side === 'attackers' ? 20 : 0;
        case 'surprise': return side === 'attackers' ? 10 : 0;
        case 'known': return 0;
        case 'counterAmbush': return side === 'attackers' ? 0 : 10;
        default: return 0;
    }
}

const SequenceViewer: React.FC<ISequence> = ({ attackers, defenders, mode }) => {
    const [sideAttackers, setSideAttackers] = useState<CharacterData[]>(attackers.map(a => {
        return { name: a.name, sequenceBonus: a.sequenceBonus, side: a.side, roll: diceRoll(), contextBonus: getContextBonus(a.side,mode) };
    }));
    const [sideDefenders, setSideDefenders] = useState<CharacterData[]>(defenders.map(a => {
        return { name: a.name, sequenceBonus: a.sequenceBonus, side: a.side, roll: diceRoll(), contextBonus: getContextBonus(a.side,mode) };
    }));
    const [sequenceTurn, setSequenceTurn] = useState(0);
    

    
    const allCharacters = [...sideAttackers, ...sideDefenders].sort((a, b) => (b.sequenceBonus + b.roll + b.contextBonus) - (a.sequenceBonus + a.roll + a.contextBonus));

    return <div>
        current: {sequenceTurn}
        {allCharacters.map(char => {
            return <p>({char.side}) {char.name}: {char.contextBonus} + {char.sequenceBonus} + {char.roll} = {char.contextBonus + char.sequenceBonus + char.roll}</p>
        })}
    </div>
}

export default Sequencer;