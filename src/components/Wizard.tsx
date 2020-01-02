import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Character, ICharacter } from './Character';
import { CharacterSheet } from './CharacterSheet';
import { GetSkillList } from './Skills';

const Wizard: React.FC = () => {
    const [viewStep, setViewStep] = useState(0);
    const [character, setCharacter] = useState(new Character({
        name: '',
        species: '',
        gender: '',
        age: 1,
        strength: 1,
        agility: 1,
        endurance: 1,
        intelligence: 1,
        perception: 1,
        willpower: 1,
        skills: GetSkillList()
    } as ICharacter));
    const [viewSheet, setViewSheet] = useState(false);
    const setData = (n: number, c: Character) => {
        setViewStep(n);
        setCharacter(c);
        setViewSheet(false);
    };
    return <div>
        <h2>Character Creator Wizard</h2>
        This is a work in progress...
        <hr />
        <Step0 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step0>
        <Step1 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step1>
        <Step2 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step2>
        <Step3 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step3>
        <Step4 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step4>
        <Step5 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step5>
        <Step6 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step6>
        <Step7 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step7>
        <Step8 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step8>
        <Step9 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step9>
        <hr />
        <Button key='toggle_sheet' onClick={() => setViewSheet(!viewSheet)}>Toggle character sheet</Button>
        {viewSheet === true ? <CharacterSheet initialCharacter={character} characterCallback={(c) => setCharacter(c)} ></CharacterSheet> : null}
    </div>;
}

interface IStepProps {
    callback: (n: number, c: Character) => void;
    character: Character;
    currentNumber: number;
}

const Step0: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 0;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>explanation of wizard and progress</h3>
        <Button key='wizard_step0_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}
const Step1: React.FC<IStepProps> = (props: IStepProps) => {
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const step = 1;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>Lets get some basic information</h3>
        <div><b>What is your character's name?</b> <TextField onChange={(e) => setName(e.target.value)} value={name}>{name}</TextField></div>
        <div><b>What is your character's gender?</b> <TextField onChange={(e) => setGender(e.target.value)} value={gender}>{gender}</TextField></div>
        <div><b>What is your character's species?</b> <TextField onChange={(e) => setSpecies(e.target.value)} value={species}>{species}</TextField></div>
        <Button key='wizard_step1_next' onClick={() => props.callback(step + 1, new Character({ ...props.character, name: name, species: species, gender: gender }))}>Next</Button>
    </div>;
}
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
const Step3: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 3;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what kind of family did your character have?</h3>
        <Button key='wizard_step3_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}
const Step4: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 4;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what is your characters strengths and weaknesses</h3>
        <Button key='wizard_step4_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}
const Step5: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 5;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what kind of personality does your character have?</h3>
        <Button key='wizard_step5_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}
const Step6: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 6;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what interests and hobbies does your character have?</h3>
        <Button key='wizard_step6_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}
const Step7: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 7;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what education does your character have?</h3>
        <Button key='wizard_step7_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}
const Step8: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 8;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>how does your character make a living?</h3>
        <Button key='wizard_step8_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}
const Step9: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 9;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>repeat step 8 until finished</h3>
        <Button key='wizard_step9_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}


export default Wizard;