import React from 'react';
import Section from '../components/playermanual/Section';
import Guidelines from '../components/gamemaster/Guidelines';


const GameMaster: React.FC = () => {
    return (<div>
        <h1>Game Master</h1>
        <p>This holds a collection of tools for the game master</p>
        <Section title='Guidelines'>
            <Guidelines />
        </Section>
    </div>);
}


export default GameMaster;