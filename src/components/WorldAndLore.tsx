import React, { useState } from 'react';
import FTLHyperDrive from './Lore/FTLHyperDrive';
import History from './Lore/History';
import Merlions from './Lore/Merlions';
import { Button } from '@material-ui/core';

const WorldAndLore: React.FC = () => {
    return (<div>
        <h1>World and Lore</h1>
        <h2>Index</h2>
        <WALSection headline='headline'><History /></WALSection>
        <WALSection headline='The FTL Hyperdrive'><FTLHyperDrive /></WALSection>
        <WALSection headline='The Sol System'></WALSection>
        <WALSection headline='The Centauri System'></WALSection>
        <WALSection headline='The other colonies'></WALSection>
        <WALSection headline='The galaxy'></WALSection>
        <WALSection headline='The Merlions'><Merlions /></WALSection>
        <WALSection headline='The Klackons'></WALSection>
        <WALSection headline='Monsters'></WALSection>

        <div></div>
    </div>);
}

interface IWALSectionProps {
    headline: string;
}

const WALSection: React.FC<IWALSectionProps> = ({ headline, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <h4><Button onClick={() => setIsOpen(!isOpen)}>{headline}</Button></h4>
            {isOpen && children}
        </div>);
}


export default WorldAndLore;