import IStepProps from "./WizardSteps";

import { useState } from "react";

import { Button } from "@material-ui/core";

import { Character } from "../Character";
import React from "react";

const Step2: React.FC<IStepProps> = ({ character, currentNumber, callback }) => {
    const [birthPlaceOption1, setBirthPlaceOption1] = useState('');
    const [birthPlaceOption2, setBirthPlaceOption2] = useState('');
    const step = 2;
    const getAddLib = () => {
        if (birthPlaceOption1 === '') return `${character.name} has no background`;
        if (birthPlaceOption2 !== '') return `${character.name} was born in ${birthPlaceOption1}, ${birthPlaceOption2}`
        return `${character.name} was born in ${birthPlaceOption1}`;
    }
    const getBirthPlaceOptions2 = () => {
        if (birthPlaceOption1 === 'Coalition of Sol')
            return ['Earth', 'Mars', 'Ceres', 'Saturn Moons', 'Jupiter Moons', 'Space Station', 'Mercury Outpost'];
        else if (birthPlaceOption1 === 'Centauri Imperium')
            return ['Rigil Bolemia', 'Rigil Phomelara', 'Toliman Lachowei', 'Toliman Auria', 'Toliman Nion', 'Proxima Siugantu'];
        else return ['Wild wild space west'];
    }
    if (currentNumber !== step) return null;
    return <div>
        <h3>where was your character born or hatched?</h3>
        {birthPlaceOption1 === '' ?
            <div>
                <Button variant="outlined" onClick={() => setBirthPlaceOption1('Coalition of Sol')}>Coalition of Sol</Button>
                <Button variant="outlined" onClick={() => setBirthPlaceOption1('Centauri Imperium')}>Centauri Imperium</Button>
                <Button variant="outlined" onClick={() => setBirthPlaceOption1('Fronteer World')}>Fronteer World</Button>
            </div>
            : null}
        {birthPlaceOption1 !== '' ?
            <div>
                {getBirthPlaceOptions2().map(option => {
                    return <Button variant="outlined" onClick={() => setBirthPlaceOption2(option)}>{option}</Button>
                })}
            </div>
            : null
        }
        {getAddLib()}
        <br />
        <Button key='wizard_step2_next' onClick={() => callback(step + 1, new Character({ ...character, background: getAddLib() }))}>Next</Button>
    </div>;
}

export default Step2;