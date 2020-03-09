import IStepProps from "./WizardSteps";
import { TextField, Button } from "@material-ui/core";
import AutoSelectField from "./../AutoSelectField";
import { Character } from "./../Character";
import React, { useState } from "react";
import { Label } from "../Label";

const Step1: React.FC<IStepProps> = (props: IStepProps) => {
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [innerStep, setInnerStep] = useState(1);
    const [agility, setAgility] = useState(-1);
    const [endurance, setEndurance] = useState(-1);
    const [perception, setPerception] = useState(-1);
    const [willpower, setWillpower] = useState(-1);
    const [intelligence, setIntelligence] = useState(-1);
    const [strength, setStrength] = useState(-1);
    const [diceSize, setDiceSize] = useState(10);
    const step = 1;
    if (props.currentNumber !== step) return null;

    const genderList = (species.toLowerCase() === 'merlion') ? ['linon', 'caion', 'vekon'] : ['male', 'female'];

    const rollDice = () => {
        switch (diceSize) {
            case 10: return () => Math.floor(Math.random() * 10) + 1;
            case 8: return () => Math.floor(Math.random() * 8) + 2;
            default: return () => Math.floor(Math.random() * 6) + 3;
        }
    }

    return <div>
        <Case condition={innerStep === 1}><h3>Lets get some basic information</h3>
            <div><b>What is your character's name?</b> <TextField onChange={(e) => setName(e.target.value)} value={name}>{name}</TextField></div>
            <div><b>What is your character's species?</b> <AutoSelectField value={species} onChange={(n) => setSpecies(n)} values={['human', 'merlion', 'klackon']} ></AutoSelectField> </div>
            <div><b>What is your character's gender?</b> <AutoSelectField values={genderList} value={gender} onChange={(e) => setGender(e)}></AutoSelectField></div></Case>
        <Case condition={innerStep === 2}>
            <h3>Basic stats</h3>
            <Button variant='contained' size='small' onClick={() => setDiceSize(10)}>1d10 {diceSize === 10 ? '(x)' : null}</Button>
            <Button variant='contained' size='small' onClick={() => setDiceSize(8)}>1d8+1 {diceSize === 8 ? '(x)' : null}</Button>
            <Button variant='contained' size='small' onClick={() => setDiceSize(6)}>1d6+2 {diceSize === 6 ? '(x)' : null}</Button>
            <AttributeRoller title='Strength' rollDice={rollDice()} n={strength} callback={(n) => setStrength(n)}></AttributeRoller>
            <AttributeRoller title='Agility' rollDice={rollDice()} n={agility} callback={(n) => setAgility(n)}></AttributeRoller>
            <AttributeRoller title='Endurance' rollDice={rollDice()} n={endurance} callback={(n) => setEndurance(n)}></AttributeRoller>
            <AttributeRoller title='Perception' rollDice={rollDice()} n={perception} callback={(n) => setPerception(n)}></AttributeRoller>
            <AttributeRoller title='Intelligence' rollDice={rollDice()} n={intelligence} callback={(n) => setWillpower(n)}></AttributeRoller>
            <AttributeRoller title='Willpower' rollDice={rollDice()} n={willpower} callback={(n) => setIntelligence(n)}></AttributeRoller>

        </Case>
        <Button variant='outlined' onClick={() => setInnerStep(innerStep + 1)}>Next</Button>
        <hr />
        <Button variant='outlined' key='wizard_step1_next' onClick={() => props.callback(step + 1, new Character({
            ...props.character,
            strength: strength,
            agility: agility,
            endurance: endurance,
            willpower: willpower,
            perception: perception,
            intelligence: intelligence,
            name: name,
            species: species,
            gender: gender
        }))}>Next</Button>
    </div>;
}
interface IAttributeRoller {
    title: string;
    callback: (n: number) => void;
    n: number;
    rollDice: () => number;
}

const AttributeRoller: React.FC<IAttributeRoller> = (props) => {
    const [attribute, setAttribute] = useState(props.n);
    const [rerolls, setRerolls] = useState(0);
    const reroll = () => {
        let newRoll = props.rollDice();
        setAttribute(newRoll);
        setRerolls(rerolls + 1);
        props.callback(newRoll);
    }
    return <div>
        <Label>{props.title}</Label>: <Label>{attribute}</Label>
        {rerolls < 3 ? <Button variant='contained' size='small' onClick={() => reroll()}>Reroll</Button> : null}
        {rerolls} / 3
    </div>
}


interface ICase {
    condition: boolean;
}

const Case: React.FC<ICase> = (props) => {
    if (props.condition) return <>{props.children}</>;
    else return null;
}

export default Step1;