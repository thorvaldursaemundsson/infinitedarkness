import React, { useState } from 'react';
import Conditional from '../../utils/Conditional';
import { CharacterSheet } from '../../views/CharacterSheet';
import { Character } from '../Character';
import { GetSkillList } from '../general/GetSkillList';
import Step1 from '../Wizard/Step1';
import Step2, { SkillRankPair } from '../Wizard/Step2';

type race = 'human' | 'shambras' | 'merlion' | 'nekovian';

const getPopulatedSkillList = (backgroundSkills:SkillRankPair[]) => {
    const allSkills = GetSkillList();

    for (var index in backgroundSkills){
        var s = backgroundSkills[index];
        
        for (var index2 in allSkills){
            var s2 = allSkills[index2];
            if (s2.name === s.skill){
                s2.level += s.rank;
                break;
            }
        }
    }

    return allSkills;
}

const Wizard: React.FC = () => {
    const [race, setRace] = useState<race>('human');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(99);
    const [name, setName] = useState('no name');
    const [step, setStep] = useState(0);
    const [backgroundSkills, setBackgroundSkills] = useState<SkillRankPair[]>([]);

    const completeStep1 = (race: race, gender: string, age: number, name: string) => {
        setBackgroundSkills([]);
        setRace(race);
        setGender(gender);
        setAge(age);
        setName(name);
        setStep(1);
    }

    const completeStep2 = (skillData:SkillRankPair[]) => {
        setBackgroundSkills(skillData);
        setStep(2);
    }

    return <div>
        <h2>Character Creator Wizard</h2>
        <Conditional shouldView={step === 0} >
            <Step1 onComplete={(race, gender, age, name) => completeStep1(race, gender, age, name)} ></Step1>
        </Conditional>
        <Conditional shouldView={step === 1} >
            <Step2 age={age} onComplete={(skillRanks) => completeStep2(skillRanks)}></Step2>
        </Conditional>
        <Conditional shouldView={step === 2}>
            <CharacterSheet characterCallback={(c) => { }}
                initialCharacter={new Character({
                    name: name,
                    gender: gender,
                    species: race,
                    age: age,
                    strength: 4,
                    agility: 4,
                    endurance: 4,
                    perception: 4,
                    intelligence: 4,
                    willpower: 4,
                    size: 'medium',
                    skills: getPopulatedSkillList(backgroundSkills),
                    perks: [],
                    traits: [],
                    background: ''
                })}
            />
        </Conditional>
    </div>;
}



export default Wizard;

//set race, gender, age, name
//determine how many templates from age
//apply templates in order
//finish, show character