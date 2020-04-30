import React from 'react';
import FTLHyperDrive from './../components/Lore/FTLHyperDrive';
import History from './../components/Lore/History';
import Merlions from './../components/Lore/Merlions';
import Klackons from './../components/Lore/Klackons';
import SolSystem from './../components/Lore/SolSystem';
import CentauriSystem from './../components/Lore/CenturiSystem';
import Humans from '../components/Lore/Humans';
import FringeWorlds from '../components/Lore/FringeWorlds';
import Section from '../components/playermanual/Section';

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
        <Section title='The Merlions'><Merlions /></Section>
        <hr />
        <Section title='The Klackons'><Klackons /></Section>
        <hr />
        <Section title='Monsters'>work in progress...</Section>
    </div>);
}

export default WorldAndLore;