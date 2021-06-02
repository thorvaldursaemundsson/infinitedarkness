import React from 'react';

import { FTLHyperDrive, History, Merlions, SolSystem, CentauriSystem, FringeWorlds, Humans, Shambra, Nekovian, Credits } from './../components/Lore/Lore'

import Section from '../components/playermanual/Section';
import Robotics from '../components/Lore/Robotics';
import Monsters from '../components/monsters/Monsters';
import Synths from '../components/Lore/Synths';

const WorldAndLore: React.FC = () => {
    return (<div>
        <h1>World and Lore</h1>
        <h2>Index</h2>
        <Section title='History'><History /></Section>
        <hr />
        <Section title='The FTL Hyperdrive'><FTLHyperDrive /></Section>
        <hr />
        <Section title='The Sol System'><SolSystem /></Section>
        <hr />
        <Section title='The Centauri System'><CentauriSystem /></Section>
        <hr />
        <Section title='The other colonies'><FringeWorlds /></Section>
        <hr />
        <Section title='The galaxy'>work in progress...</Section>
        <hr />
        <Section title='The Humans'><Humans /></Section>
        <hr />
        <Section title='The Synths'><Synths /></Section>
        <hr />
        <Section title='The Merlions'><Merlions /></Section>
        <hr />
        <Section title='The Shambras'><Shambra /></Section>
        <hr />
        <Section title='The Nekovians'><Nekovian /></Section>
        <hr />
        <Section title='Monsters'><Monsters /></Section>
        <hr/>
        <Section title='Robotics'><Robotics /></Section>
        <hr/>
        <Section title='Credits'><Credits /></Section>
    </div>);
}

export default WorldAndLore;