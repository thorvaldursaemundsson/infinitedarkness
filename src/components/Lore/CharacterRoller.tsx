import React, { useState } from "react";
import EditText from "../HideText";
import { Character } from "../Character";

interface IDice {
    sides: number;
    numberOfDice: number;
}

interface ICharacterRoller {
    strength: IDice;
    agility: IDice;
    endurance: IDice;
    perception: IDice;
    willpower: IDice;
    intelligence: IDice;
}

interface ICharacterData {
    strength: number[];
    agility: number[];
    endurance: number[];
    perception: number[];
    willpower: number[];
    intelligence: number[];
}

const CharacterRoller: React.FC<ICharacterRoller> = (props) => {
    const [characterData, setCharacterData] = useState<ICharacterData[]>([]);

    return (<div className="flexbox">
        <button onClick={() => rollCharacterData(props, setCharacterData)}>Roll</button>

        {characterData.length > 0 ? <div className="flexContainer">
            Strength<br />
            Agility<br />
            Endurance<br />
            Perception<br />
            Willpower<br />
            Intelligence<br />
        </div> : null}

        {characterData.map(cd => {
            return <div className="flexContainer">
                {sumN(cd.strength)}<br />
                {sumN(cd.agility)}<br />
                {sumN(cd.endurance)}<br />
                {sumN(cd.perception)}<br />
                {sumN(cd.willpower)}<br />
                {sumN(cd.intelligence)}<br />
            </div>
        })}
    </div>);
}

const sumN = (n: number[]) => ` ${n.join(', ')} = ${n.reduce(function (a, b) { return a + b; }, 0)}`;

const rollCharacterData = (dice: ICharacterRoller, setter: React.Dispatch<React.SetStateAction<ICharacterData[]>>) => {
    let charData: ICharacterData[] = [];

    for (let counter = 0; counter < 4; counter++) {
        charData.push({
            strength: roll(dice.strength),
            agility: roll(dice.agility),
            endurance: roll(dice.endurance),
            perception: roll(dice.perception),
            willpower: roll(dice.willpower),
            intelligence: roll(dice.intelligence),
        });
    }
    setter(charData);
}

const roll = (dice: IDice) => {
    let numbers: number[] = [];
    for (let counter = 0; counter < dice.numberOfDice; counter++) {
        numbers.push(Math.floor((Math.random() * dice.sides)) + 1);
    }
    return numbers;
}



const getStrengthHuman = (age: number) => {
    if (age > 80) return { sides: 8, numberOfDice: 1 };
    if (age > 26) return { sides: 10, numberOfDice: 1 };
    return { sides: 8, numberOfDice: 1 };

}
const getAgilityHuman = (age: number) => {
    if (age > 80) return { sides: 6, numberOfDice: 1 };
    if (age > 40) return { sides: 8, numberOfDice: 1 };
    return { sides: 10, numberOfDice: 1 };
}
const getEnduranceHuman = (age: number) => {
    if (age > 80) return { sides: 8, numberOfDice: 1 };
    if (age > 40) return { sides: 10, numberOfDice: 1 };
    return { sides: 12, numberOfDice: 1 };
}
const getPerceptionHuman = (age: number) => {
    if (age > 80) return { sides: 6, numberOfDice: 1 };
    if (age > 40) return { sides: 8, numberOfDice: 1 };
    if (age > 26) return { sides: 10, numberOfDice: 1 };
    return { sides: 12, numberOfDice: 1 };

}
const getIntelligenceHuman = (age: number) => {
    if (age > 80) return { sides: 8, numberOfDice: 1 };
    return { sides: 10, numberOfDice: 1 };
}
const getWillpowerHuman = (age: number) => {
    if (age > 80) return { sides: 8, numberOfDice: 1 };
    if (age > 40) return { sides: 10, numberOfDice: 1 };
    return { sides: 6, numberOfDice: 1 };
}


export const CharacterRollerHuman = () => {
    const [age, setAge] = useState(24);
    return <>
        Age: {age}<br />
    Starting Exp: {Character.CharacterPointsHuman(age)}<br />
    Multiplier Exp: {Character.ExperienceMultiplerHuman(age)}<br />
        <EditText isEdit="edit" onChange={(str) => setAge(parseInt(str))} txt={age} explain="" />
        <CharacterRoller
            strength={getStrengthHuman(age)}
            agility={getAgilityHuman(age)}
            endurance={getEnduranceHuman(age)}
            intelligence={getIntelligenceHuman(age)}
            willpower={getWillpowerHuman(age)}
            perception={getPerceptionHuman(age)}
        />
    </>
}

const getStrengthShambra = (age: number) => {
    if (age > 80) return { sides: 8, numberOfDice: 1 };
    if (age > 26) return { sides: 10, numberOfDice: 1 };
    return { sides: 8, numberOfDice: 1 };
}
const getAgilityShambra = (age: number) => {
    if (age > 80) return { sides: 6, numberOfDice: 1 };
    if (age > 40) return { sides: 8, numberOfDice: 1 };
    return { sides: 10, numberOfDice: 1 };
}
const getEnduranceShambra = (age: number) => {
    if (age > 80) return { sides: 8, numberOfDice: 1 };
    if (age > 40) return { sides: 10, numberOfDice: 1 };
    return { sides: 12, numberOfDice: 1 };
}
const getPerceptionShambra = (age: number) => {
    if (age > 80) return { sides: 6, numberOfDice: 1 };
    if (age > 40) return { sides: 8, numberOfDice: 1 };
    if (age > 26) return { sides: 10, numberOfDice: 1 };
    return { sides: 12, numberOfDice: 1 };
}
const getIntelligenceShambra = (age: number) => {
    if (age > 80) return { sides: 8, numberOfDice: 1 };
    return { sides: 10, numberOfDice: 1 };
}
const getWillpowerShambra = (age: number) => {
    if (age > 80) return { sides: 8, numberOfDice: 1 };
    if (age > 40) return { sides: 10, numberOfDice: 1 };
    return { sides: 6, numberOfDice: 1 };
}


export const CharacterRollerShambra = () => {
    const [age, setAge] = useState(24);
    return <>
        Age: {age}<br />
    Starting Exp: {Character.CharacterPointsShambras(age)}<br />
    Multiplier Exp: {Character.ExperienceMultiplerShambras(age)}<br />
        <EditText isEdit="edit" onChange={(str) => setAge(parseInt(str))} txt={age} explain="" />
        <CharacterRoller
            strength={getStrengthShambra(age)}
            agility={getAgilityShambra(age)}
            endurance={getEnduranceShambra(age)}
            intelligence={getIntelligenceShambra(age)}
            willpower={getWillpowerShambra(age)}
            perception={getPerceptionShambra(age)}
        />
    </>
}

const getStrengthMerlion = (age: number) => {
    if (age > 40) return { sides: 8, numberOfDice: 1 };
    return { sides: 6, numberOfDice: 1 };
}
const getAgilityMerlion = (age: number) => {
    if (age > 40) return { sides: 8, numberOfDice: 1 };
    return { sides: 10, numberOfDice: 1 };
}
const getEnduranceMerlion = (age: number) => {
    if (age > 40) return { sides: 6, numberOfDice: 1 };
    return { sides: 8, numberOfDice: 1 };
}
const getPerceptionMerlion = (age: number) => {
    if (age > 40) return { sides: 8, numberOfDice: 1 };
    return { sides: 10, numberOfDice: 1 };
}
const getIntelligenceMerlion = (age: number) => {
    return { sides: 4, numberOfDice: 4 };
}
const getWillpowerMerlion = (age: number) => {
    return { sides: 10, numberOfDice: 1 };
}

export const CharacterRollerMerlion = () => {
    const [age, setAge] = useState(24);
    return <>
        Age: {age}<br />
    Starting Exp: {Character.CharacterPointsMerlion(age)}<br />
    Multiplier Exp: {Character.ExperienceMultiplerMerlion(age)}<br />
        <EditText isEdit="edit" onChange={(str) => setAge(parseInt(str))} txt={age} explain="" />
        <CharacterRoller
            strength={getStrengthMerlion(age)}
            agility={getAgilityMerlion(age)}
            endurance={getEnduranceMerlion(age)}
            intelligence={getIntelligenceMerlion(age)}
            willpower={getWillpowerMerlion(age)}
            perception={getPerceptionMerlion(age)}
        />
    </>
}

const getStrengthNekovian = (age: number) => {
    if (age > 36) return { sides: 10, numberOfDice: 1 };
    return { sides: 12, numberOfDice: 1 };
}
const getAgilityNekovian = (age: number) => {
    if (age > 61) return { sides: 8, numberOfDice: 1 };
    if (age > 24) return { sides: 10, numberOfDice: 1 };
    return { sides: 12, numberOfDice: 1 };
}
const getEnduranceNekovian = (age: number) => {
    if (age > 60) return { sides: 8, numberOfDice: 1 };
    if (age > 36) return { sides: 10, numberOfDice: 1 };
    if (age > 24) return { sides: 12, numberOfDice: 1 };
    return { sides: 10, numberOfDice: 1 };
}
const getPerceptionNekovian = (age: number) => {
    if (age > 60) return { sides: 4, numberOfDice: 1 };
    if (age > 36) return { sides: 6, numberOfDice: 1 };
    return { sides: 8, numberOfDice: 1 };
}
const getIntelligenceNekovian = (age: number) => {
    if (age > 60) return { sides: 8, numberOfDice: 1 };
    if (age > 36) return { sides: 8, numberOfDice: 1 };
    if (age > 24) return { sides: 10, numberOfDice: 1 };
    return { sides: 8, numberOfDice: 1 };
}
const getWillpowerNekovian = (age: number) => {
    return { sides: 12, numberOfDice: 1 };
}

export const CharacterRollerNekovian = () => {
    const [age, setAge] = useState(24);
    return <>
        Age: {age}<br />
    Starting Exp: {Character.CharacterPointsNekovian(age)}<br />
    Multiplier Exp: {Character.ExperienceMultiplerNekovian(age)}<br />
        <EditText isEdit="edit" onChange={(str) => setAge(parseInt(str))} txt={age} explain="" />
        <CharacterRoller
            strength={getStrengthNekovian(age)}
            agility={getAgilityNekovian(age)}
            endurance={getEnduranceNekovian(age)}
            intelligence={getIntelligenceNekovian(age)}
            willpower={getWillpowerNekovian(age)}
            perception={getPerceptionNekovian(age)}
        />
    </>
}

export default CharacterRoller;