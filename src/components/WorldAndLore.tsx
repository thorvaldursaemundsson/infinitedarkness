import React, { useState } from 'react';
import FTLHyperDrive from './Lore/FTLHyperDrive';
import History from './Lore/History';
import Merlions from './Lore/Merlions';
import { Button } from '@material-ui/core';
import Klackons from './Lore/Klackons';
import SolSystem from './Lore/SolSystem';
import CentauriSystem from './Lore/CenturiSystem';

const WorldAndLore: React.FC = () => {
    return (<div>
        <h1>World and Lore</h1>
        <h2>Index</h2>
        <WALSection headline='History'><History /></WALSection>
        <WALSection headline='The FTL Hyperdrive'><FTLHyperDrive /></WALSection>
        <WALSection headline='The Sol System'><SolSystem /></WALSection>
        <WALSection headline='The Centauri System'><CentauriSystem /></WALSection>
        <WALSection headline='The other colonies'>work in progress...</WALSection>
        <WALSection headline='The galaxy'>work in progress...</WALSection>
        <WALSection headline='The Merlions'><Merlions /></WALSection>
        <WALSection headline='The Klackons'><Klackons /></WALSection>
        <WALSection headline='Monsters'>work in progress...</WALSection>
    </div>);
}

interface IWALSectionProps {
    headline: string;
}

const WALSection: React.FC<IWALSectionProps> = ({ headline, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{borderBottom:'1px dotted lightgrey'}}>
            <h4><Button onClick={() => setIsOpen(!isOpen)}>{headline}</Button></h4>
            {isOpen && children}
        </div>);
}


export default WorldAndLore;