import IStepProps from "./WizardSteps";

import { useState } from "react";

import { TextField, Button } from "@material-ui/core";

import AutoSelectField from "../AutoSelectField";

import { Character } from "../Character";
import React from "react";

const Step1: React.FC<IStepProps> = (props: IStepProps) => {
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const step = 1;
    if (props.currentNumber !== step) return null;

    const genderList = (species.toLowerCase() === 'merlion') ? ['linon', 'caion', 'vekon'] : ['male','female'];

    return <div>
        <h3>Lets get some basic information</h3>
        <div><b>What is your character's name?</b> <TextField onChange={(e) => setName(e.target.value)} value={name}>{name}</TextField></div>
        <div><b>What is your character's species?</b> <AutoSelectField value={species} onChange={(n) => setSpecies(n)} values={['human','merlion','klackon']} ></AutoSelectField> </div>
        <div><b>What is your character's gender?</b> <AutoSelectField values={genderList} value={gender} onChange={(e) => setGender(e)}></AutoSelectField></div>
        <Button key='wizard_step1_next' onClick={() => props.callback(step + 1, new Character({ ...props.character, name: name, species: species, gender: gender }))}>Next</Button>
    </div>;
}
export default Step1;