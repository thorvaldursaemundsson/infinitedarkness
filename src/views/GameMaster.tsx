import React from 'react';
import Section from '../components/playermanual/Section';
import Guidelines from '../components/gamemaster/Guidelines';
import Experience from '../components/gamemaster/Experience';
import GameTools from '../components/gamemaster/GameTools';
import Wizard from '../components/gamemaster/Wizard';


const GameMaster: React.FC = () => {
    return (<div>
        <h1>Game Master</h1>
        <p>This holds a collection of tools for the game master</p>
        <Section title='Guidelines'>
            <Guidelines />
        </Section>
        <Section title='Experience'>
            <Experience />
        </Section>
        <Section title='Game Tools'>
            <GameTools />
        </Section>
        <Section title='Character creator wizard'>
            <Wizard />
        </Section>
    </div>);
}


export default GameMaster;