import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Character, ICharacter } from './../components/Character';
import { CharacterSheet } from './CharacterSheet';
import Step0 from './../components/Wizard/Step0';
import Step1 from './../components/Wizard/Step1';
import Step2 from './../components/Wizard/Step2';
import Step3 from './../components/Wizard/Step3';
import Step4 from './../components/Wizard/Step4';
import Step5 from './../components/Wizard/Step5';
import Step6 from './../components/Wizard/Step6';
import Step7 from './../components/Wizard/Step7';
import Step8 from './../components/Wizard/Step8';
import Step9 from './../components/Wizard/Step9';
import { GetSkillList } from '../components/general/GetSkillList';

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
        <p>Answering these questions will produce a template of a character with a set of abilities and matching backstory that makes some kind of sense.
            <br />
            But you are expected to modify and correct it.
        </p>
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


export default Wizard;