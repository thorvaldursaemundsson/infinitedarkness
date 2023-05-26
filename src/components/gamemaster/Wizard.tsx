import React, { useState } from 'react';
import Conditional from '../../utils/Conditional';
import { CharacterSheet } from '../../views/CharacterSheet';
import { Character } from '../Character';
import { GetSkillList } from '../general/GetSkillList';
import BackgroundChooser, { SkillRankPair } from '../Wizard/BackgroundChooser';
import BasicChooser from '../Wizard/BasicChooser';
import PointBuy, { IStats } from '../Wizard/PointBuy';
import { race } from "../races/Races";
import AbilityRoller from '../Wizard/AbilityRoller';

export const getPopulatedSkillList = (backgroundSkills: SkillRankPair[]) => {
    const allSkills = GetSkillList();

    for (let index in backgroundSkills) {
        let s = backgroundSkills[index];

        for (let index2 in allSkills) {
            let s2 = allSkills[index2];
            if (s2.name === s.skill) {
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
    const [pbOrR, setPbOrR] = useState(true);
    const [abilityStats, setAbilityStats] = useState<IStats>({
        age: 24,
        species: 'human',
        strength: 4,
        agility: 4,
        endurance: 4,
        perception: 4,
        intelligence: 4,
        willpower: 4,
        size: 'medium',
        restExp: 0,
    });

    const completeStep1 = (changerace: race, gender: string, age: number, name: string) => {
        setBackgroundSkills([]);
        setRace(changerace);
        setGender(gender);
        setAge(age);
        setName(name);
        setStep(1);
    }

    const completeStep2 = (skillData: SkillRankPair[]) => {
        setBackgroundSkills(skillData);
        setStep(3);
    }

    return <div>
        <h2>Character Creator Wizard</h2>
        <Conditional shouldView={step === 0} >
            <BasicChooser onComplete={(race, gender, age, name) => completeStep1(race, gender, age, name)} />
        </Conditional>
        <Conditional shouldView={step === 1}>
            <button onClick={() => setPbOrR(!pbOrR)}>PointBuy / Roll for stats</button>
            {pbOrR !== false ? <PointBuy startingAge={age} startingSpecies={race} onComplete={(output) => { setAbilityStats(output); setStep(2) }} /> :
            <AbilityRoller startingAge={age} startingSpecies={race} onComplete={(output) => { setAbilityStats(output); setStep(2) }} /> }
        </Conditional>
        <Conditional shouldView={step === 2} >
            <BackgroundChooser age={age} onComplete={(skillRanks) => completeStep2(skillRanks)} />
        </Conditional>
        <Conditional shouldView={step === 3}>
            <CharacterSheet characterCallback={(c) => { }}
                initialCharacter={new Character({
                    name: name,
                    gender: gender,
                    species: race,
                    age: age,
                    strength: abilityStats.strength,
                    agility: abilityStats.agility,
                    endurance: abilityStats.endurance,
                    perception: abilityStats.perception,
                    intelligence: abilityStats.intelligence,
                    willpower: abilityStats.willpower,
                    size: abilityStats.size,
                    skills: getPopulatedSkillList(backgroundSkills),
                    perks: [],
                    traits: [],
                    background: '',
                    bonusExp: abilityStats.restExp,
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