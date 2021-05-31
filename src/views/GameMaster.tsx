import React from 'react';
import Section from '../components/playermanual/Section';
import Guidelines from '../components/gamemaster/Guidelines';
import Experience from '../components/gamemaster/Experience';
import GameTools from '../components/gamemaster/GameTools';
import Wizard from '../components/gamemaster/Wizard';
import CharacterGenerator from '../components/gamemaster/CharacterGenerator';
import Weather from '../components/gamemaster/Weather';
import EnvironmentalDamage from '../components/gamemaster/EnvironmentalDamage';
import SpellRoller from '../components/gamemaster/SpellRoller';


const GameMaster: React.FC = () => {
    return (<div>
        <h1>Game Master</h1>
        <p>This holds a collection of tools for the game master</p>
        <Section title='Guidelines'>
            <Guidelines />
        </Section>
        <hr />
        <Section title='Experience'>
            <Experience />
        </Section>
        <hr />
        <Section title='Game Tools'>
            <GameTools />
        </Section>
        <hr />
        <Section title='Weather'>
            <Weather />
        </Section>
        <hr />
        <Section title='Spell Roller'><SpellRoller key='pm9' /></Section>
        <hr />
        <EnvironmentalDamage key='pmenvdmg' />
        <hr />
        <Section title='NPC Generator'>
            <CharacterGenerator />
        </Section>
        <hr />
        <Section title='Character creator wizard'>
            <Wizard />
        </Section>
    </div>);
}




export default GameMaster;