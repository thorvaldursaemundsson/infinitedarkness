import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Section from '../components/playermanual/Section';
import Sequencer from '../components/gamemaster/Sequencer';

const GameMaster: React.FC = () => {
    return (<div>
        <h1>Game Master</h1>
        <p>This holds a collection of tools for the game master</p>
        <Section title='Sequencer'>
            <Sequencer />
        </Section>
    </div>);
}


export default GameMaster;