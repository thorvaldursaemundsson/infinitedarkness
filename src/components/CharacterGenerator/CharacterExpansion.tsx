import React from "react";
import { AdultBackground, EarlyChildhoodBackground, ITemplate, YouthBackground } from "../backgrounds/backgrounds";
import { Character } from "../Character";
import { getPopulatedSkillList } from "../gamemaster/Wizard";
import { GetSkillList } from "../general/GetSkillList";
import { Skill } from "../general/Skills";
import { rollCharacterData, sumN } from "../Lore/CharacterRoller";
import { humans } from "../races/Humans";
import { race } from "../races/Races";

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

    let skills = randomSkillPicker(EarlyChildhoodBackground.templates[Math.floor(Math.random() * 4)], EarlyChildhoodBackground.pickRaise);

    if (age > YouthBackground.ageRange[0]) {
        skills = [...skills, ...randomSkillPicker(YouthBackground.templates[Math.floor(Math.random() * 4)], EarlyChildhoodBackground.pickRaise)];
    }

    if (age > AdultBackground.ageRange[0]) {
        skills = [...skills, ...randomSkillPicker(AdultBackground.templates[Math.floor(Math.random() * 4)], EarlyChildhoodBackground.pickRaise)];
    }

    return getPopulatedSkillList(skills.map(s => {
        return {
            skill: s.name,
            rank: s.level,
        }
    }));
}

const backgroundPicker = (species: race, age: number) => {
    switch (species) {
        case 'human':
            return backgroundPickerHuman(age);
        default:
            return [];
    }
}

const getRacialMod = (species: race, age: number) => {
    switch (species) {
        case 'human':
            const h = humans.find(pred => pred.ageSpan[0] < age && age < pred.ageSpan[1]);
            if (h !== undefined) return h;
            else return humans[humans.length];
        default:
            return humans[humans.length];
    }
}

const CharacterExpansion: React.FC<ICharacterExpansion> = ({ npcBase }) => {
    const racial = getRacialMod(npcBase.species, npcBase.age);

    const characterData = rollCharacterData(racial);
    const skillsData = backgroundPicker(npcBase.species, npcBase.age).filter(pred => pred.level > 0);

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
        background: npcBase.about,
        skills: skillsData,
        perks: [],
        traits: [],
        size: 'medium',
    });


    return <>
        <p>Strength: {character.strength}, Endurance {character.endurance}, Agility: {character.agility},
    Intelligence: {character.intelligence}, Willpower: {character.willpower}, Perception {character.perception}
        </p>
        <p>
            Life: {character.getLife()}, Defense: {character.getBaseDefense()} / {character.getLowDefense()} / {character.getPassiveDefense()}
        </p>
        <h5>Skills</h5>
        <ul>
            {character.skills.map(s => <li>{s.name}: {s.level}</li>)}
        </ul>
    </>;
}


export default CharacterExpansion;