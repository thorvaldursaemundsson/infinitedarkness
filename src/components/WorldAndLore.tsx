import React  from 'react';
import FTLHyperDrive from './Lore/FTLHyperDrive';
import History from './Lore/History';
import Merlions from './Lore/Merlions';

const WorldAndLore: React.FC = () => {
    return (<div>
        <h1>World and Lore</h1>
        <h2>Index</h2>
        <h4>History</h4>
        <h4>The FTL Hyperdrive</h4>
        <h4>The Sol System</h4>
        <h4>The Centauri System</h4>
        <h4>The other colonies</h4>
        <h4>The galaxy</h4>
        <h4>The Merlions</h4>
        <h4>The Klackons</h4>
        <h4>Monsters</h4>
        <div><History></History></div>
        <div><FTLHyperDrive></FTLHyperDrive></div>
        <div><Merlions></Merlions></div>
    </div>);
}




export default WorldAndLore;