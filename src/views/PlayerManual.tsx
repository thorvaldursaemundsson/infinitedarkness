import React from 'react';
import MakeCharacter from '../components/playermanual/MakeCharacter';
import Combat from '../components/playermanual/Combat';
import Equipment from '../components/playermanual/Equipment';
import Wealth from '../components/playermanual/Wealth';
import Experience from '../components/playermanual/Experience';
import Vehicles from '../components/playermanual/Vehicles';

const PlayerManual: React.FC = () => {
    return (<div>
        <h1>Index</h1>
        <ul>
            <li>
                How to make a character
            </li>
            <li>
                Character points and experience
            </li>
            <li>
                Combat
            </li>
            <li>
                Wealth
            </li>
            <li>
                Equipment
            </li>
            <li>
                Vehicles
            </li>
        </ul>
        <hr />
        <MakeCharacter />
        <hr />
        <Wealth />
        <hr />
        <Experience />
        <hr />
        <Combat />
        <hr />
        <Equipment />
        <hr />
        <Vehicles />
        <hr />

    </div>);
}


export default PlayerManual;