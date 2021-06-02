import React from "react";
import { AdultBackground, EarlyChildhoodBackground, ITemplate, YouthBackground } from "../backgrounds/backgrounds";
import { Character } from "../Character";
import { getPopulatedSkillList } from "../gamemaster/Wizard";
import { GetSkillList } from "../general/GetSkillList";
import { Skill } from "../general/Skills";
import { rollCharacterData, sumN } from "../Lore/CharacterRoller";
import { humans } from "../races/Humans";
import { merlions } from "../races/Merlions";
import { nekovian } from "../races/Nekovians";
import { race } from "../races/Races";
import { shambras } from "../races/Shambras";

export interface INonPlayerCharacter {
    species: race;
    name: string;
    quirts: string;
    job: string;
    about: string;
    weakness: string;
    need: string;
    desire: string;
    height: number;
    weight: number;
    gender: string;
    enemy: string | undefined;
    rumors: string | undefined;
    secret: string | undefined;
    redeemingQuality: string | undefined;
    age: number;
}


interface ICharacterExpansion {
    npcBase: INonPlayerCharacter;
}
const skillList = GetSkillList();
const randomSkillPicker = (template: ITemplate, pickOptions: number[]) => {
    let skills: Skill[] = [];
    for (var index in pickOptions) {
        var rank = pickOptions[index];

        const skillName = template.skillOptions[Math.floor(Math.random() * template.skillOptions.length)];
        if (skillName !== undefined) {
            const skill = skillList.find(pred => pred.name === skillName);
            if (skill !== undefined) {
                skills.push({
                    ...skill,
                    level: rank,
                });
            }
        }
    }
    return skills;
}

const backgroundPickerHuman = (age: number) => {
    const backgrounds: string[] = [];
    const firstBackground = EarlyChildhoodBackground.templates[Math.floor(Math.random() * 4)];
    backgrounds.push(firstBackground.name);
    let skills = randomSkillPicker(firstBackground, EarlyChildhoodBackground.pickRaise);

    if (age > YouthBackground.ageRange[0]) {
        const secondBackground = YouthBackground.templates[Math.floor(Math.random() * 4)];
        backgrounds.push(secondBackground.name);
        skills = [...skills, ...randomSkillPicker(secondBackground, EarlyChildhoodBackground.pickRaise)];
    }

    if (age > AdultBackground.ageRange[0]) {
        const thirdBackground = AdultBackground.templates[Math.floor(Math.random() * 4)];
        backgrounds.push(thirdBackground.name);
        skills = [...skills, ...randomSkillPicker(thirdBackground, EarlyChildhoodBackground.pickRaise)];
    }

    return {
        skills: getPopulatedSkillList(skills.map(s => {
            return {
                skill: s.name,
                rank: s.level,
            }
        })),
        backgrounds: backgrounds
    };
}

const backgroundPicker = (species: race, age: number) => {
    switch (species) {
        case 'human':
            return backgroundPickerHuman(age);
        default:
            return { skills: [], backgrounds: [] };
    }
}

const getRacialMod = (species: race, age: number) => {
    switch (species) {
        case 'human':
            const h = humans.find(pred => pred.ageSpan[0] < age && age < pred.ageSpan[1]);
            if (h !== undefined) return h;
            else return humans[humans.length];
        case 'merlion':
            const m = merlions.find(pred => pred.ageSpan[0] < age && age < pred.ageSpan[1]);
            if (m !== undefined) return m;
            else return merlions[merlions.length];
        case 'nekovian':
            const n = nekovian.find(pred => pred.ageSpan[0] < age && age < pred.ageSpan[1]);
            if (n !== undefined) return n;
            else return nekovian[nekovian.length];
        case 'shambras':
            const s = shambras.find(pred => pred.ageSpan[0] < age && age < pred.ageSpan[1]);
            if (s !== undefined) return s;
            else return shambras[shambras.length];
        default:
            return humans[humans.length];
    }
}

const CharacterExpansion: React.FC<ICharacterExpansion> = ({ npcBase }) => {
    const racial = getRacialMod(npcBase.species, npcBase.age);

    const characterData = rollCharacterData(racial);
    const { skills, backgrounds } = backgroundPicker(npcBase.species, npcBase.age);

    const character = new Character({
        name: npcBase.name,
        species: npcBase.species,
        age: npcBase.age,
        gender: npcBase.gender,
        strength: parseInt(sumN(characterData[0].strength)),
        agility: parseInt(sumN(characterData[0].agility)),
        endurance: parseInt(sumN(characterData[0].endurance)),
        intelligence: parseInt(sumN(characterData[0].intelligence)),
        willpower: parseInt(sumN(characterData[0].willpower)),
        perception: parseInt(sumN(characterData[0].perception)),
        background: backgrounds.reduce((p, c) => `${p}, ${c}`),
        skills: skills.filter(p => p.level > 0),
        perks: [],
        traits: [],
        size: 'medium',
    });


    return <>
        <p>Strength: {character.strength}, Endurance {character.endurance}, Agility: {character.agility},
    Intelligence: {character.intelligence}, Willpower: {character.willpower}, Perception {character.perception}
        </p>
        <p>
            Life: {character.getLife()}, Defense: {character.getBaseDefense()} / {character.getPassiveDefense()} / {character.getActiveDefense()}
        </p>
        <p>Background: {character.background}</p>
        <h5>Skills</h5>
        <ul>
            {character.skills.map(s => <li>{s.name}: {s.level}</li>)}
        </ul>
    </>;
}


export default CharacterExpansion;