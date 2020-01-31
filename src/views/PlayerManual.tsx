import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import MakeCharacter from '../components/playermanual/MakeCharacter';
import Combat from '../components/playermanual/Combat';
import Equipment from '../components/playermanual/Equipment';

const PlayerManual: React.FC = () => {
    return (<div>
        <h1>Index</h1>
        <ul>
            <li>
                How to make a character
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
        <Combat />
        <hr/>
        <Equipment />
        <hr/>
        
    </div>);
}




export default PlayerManual;