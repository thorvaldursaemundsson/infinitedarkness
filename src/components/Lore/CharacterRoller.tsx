import React, { useState } from "react";
import EditText from "../general/HideText";
import { Character } from "../Character";
import { humans } from "../races/Humans";
import { IDice, IRacialMod } from "../races/Races";
import { shambras } from "../races/Shambras";
import { merlions } from "../races/Merlions";
import { nekovian } from "../races/Nekovians";



interface ICharacterData {
    strength: number[];
    agility: number[];
    endurance: number[];
    perception: number[];
    willpower: number[];
    intelligence: number[];
}

const CharacterRoller: React.FC<IRacialMod> = (props) => {
    const [characterData, setCharacterData] = useState<ICharacterData[]>([]);

    return (<div className="flexbox">
        <button onClick={() => rollCharacterData(props, setCharacterData)}>Roll</button>

        {characterData.length > 0 ? <div className="flexContainer">
            Strength<br />
            Endurance<br />
            Agility<br />
            Perception<br />
            Intelligence<br />
            Willpower<br />
        </div> : null}

        {characterData.map(cd => {
            return <div className="flexContainer">
                {sumN(cd.strength)}<br />
                {sumN(cd.endurance)}<br />
                {sumN(cd.agility)}<br />
                {sumN(cd.perception)}<br />
                {sumN(cd.intelligence)}<br />
                {sumN(cd.willpower)}<br />
            </div>
        })}
    </div>);
}

const sumN = (n: number[]) => ` ${n.join(', ')} = ${n.reduce(function (a, b) { return a + b; }, 0)}`;

const rollCharacterData = (dice: IRacialMod, setter: React.Dispatch<React.SetStateAction<ICharacterData[]>>) => {
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
        numbers.push(Math.floor((Math.random() * dice.sidesPerDice)) + 1);
    }
    return numbers;
}



const getStrengthHuman = (age: number) => {
    var x = humans.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.strength;
    }
    return humans[0].strength;
}
const getAgilityHuman = (age: number) => {
    var x = humans.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.agility;
    }
    return humans[0].agility;
}
const getEnduranceHuman = (age: number) => {
    var x = humans.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.endurance;
    }
    return humans[0].endurance;
}
const getPerceptionHuman = (age: number) => {
    var x = humans.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.perception;
    }
    return humans[0].perception;

}
const getIntelligenceHuman = (age: number) => {
    var x = humans.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.intelligence;
    }
    return humans[0].intelligence;
}
const getWillpowerHuman = (age: number) => {
    var x = humans.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.willpower;
    }
    return humans[0].willpower;
}


export const CharacterRollerHuman = () => {
    const [age, setAge] = useState(24);
    return <>
        Age: {age}<br />
    Starting Exp: {Character.CharacterPointsHuman(age)}<br />
    Multiplier Exp: {Character.ExperienceMultiplerHuman(age)}<br />
        <EditText isEdit="edit" onChange={(str) => setAge(parseInt(str))} txt={age} explain="" />
        <CharacterRoller
            ageSpan={[age, age]}
            species={'human'}
            sizeOptions={['medium']}
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
    var x = shambras.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.strength;
    }
    return shambras[0].strength;
}
const getAgilityShambra = (age: number) => {
    var x = shambras.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.agility;
    }
    return shambras[0].agility;
}
const getEnduranceShambra = (age: number) => {
    var x = shambras.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.endurance;
    }
    return shambras[0].endurance;
}
const getPerceptionShambra = (age: number) => {
    var x = shambras.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.perception;
    }
    return shambras[0].perception;
}
const getIntelligenceShambra = (age: number) => {
    var x = shambras.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.intelligence;
    }
    return shambras[0].intelligence;
}
const getWillpowerShambra = (age: number) => {
    var x = shambras.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.willpower;
    }
    return shambras[0].willpower;
}


export const CharacterRollerShambra = () => {
    const [age, setAge] = useState(24);
    return <>
        Age: {age}<br />
    Starting Exp: {Character.CharacterPointsShambras(age)}<br />
    Multiplier Exp: {Character.ExperienceMultiplerShambras(age)}<br />
        <EditText isEdit="edit" onChange={(str) => setAge(parseInt(str))} txt={age} explain="" />
        <CharacterRoller
            ageSpan={[age, age]}
            species={'shambras'}
            sizeOptions={['medium']}
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
    var x = merlions.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.strength;
    }
    return merlions[0].strength;
}
const getAgilityMerlion = (age: number) => {
    var x = merlions.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.agility;
    }
    return merlions[0].agility;
}
const getEnduranceMerlion = (age: number) => {
    var x = merlions.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.endurance;
    }
    return merlions[0].endurance;
}
const getPerceptionMerlion = (age: number) => {
    var x = merlions.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.perception;
    }
    return merlions[0].perception;
}
const getIntelligenceMerlion = (age: number) => {
    var x = merlions.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.intelligence;
    }
    return merlions[0].intelligence;
}
const getWillpowerMerlion = (age: number) => {
    var x = merlions.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined) {
        return x.willpower;
    }
    return merlions[0].willpower;
}

export const CharacterRollerMerlion = () => {
    const [age, setAge] = useState(24);
    return <>
        Age: {age}<br />
    Starting Exp: {Character.CharacterPointsMerlion(age)}<br />
    Multiplier Exp: {Character.ExperienceMultiplerMerlion(age)}<br />
        <EditText isEdit="edit" onChange={(str) => setAge(parseInt(str))} txt={age} explain="" />
        <CharacterRoller
            species={'merlion'}
            sizeOptions={['medium']}
            ageSpan={[age, age]}
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
    var x = nekovian.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined){
        return x.strength;
    }
    return nekovian[0].strength;
}
const getAgilityNekovian = (age: number) => {
    var x = nekovian.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined){
        return x.agility;
    }
    return nekovian[0].agility;
}
const getEnduranceNekovian = (age: number) => {
    var x = nekovian.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined){
        return x.endurance;
    }
    return nekovian[0].endurance;
}
const getPerceptionNekovian = (age: number) => {
    var x = nekovian.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined){
        return x.perception;
    }
    return nekovian[0].perception;
}
const getIntelligenceNekovian = (age: number) => {
    var x = nekovian.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined){
        return x.intelligence;
    }
    return nekovian[0].intelligence;
}
const getWillpowerNekovian = (age: number) => {
    var x = nekovian.find(pred => pred.ageSpan[0] > age && pred.ageSpan[1] < age);
    if (x !== undefined){
        return x.willpower;
    }
    return nekovian[0].willpower;
}

export const CharacterRollerNekovian = () => {
    const [age, setAge] = useState(24);
    return <>
        Age: {age}<br />
    Starting Exp: {Character.CharacterPointsNekovian(age)}<br />
    Multiplier Exp: {Character.ExperienceMultiplerNekovian(age)}<br />
        <EditText isEdit="edit" onChange={(str) => setAge(parseInt(str))} txt={age} explain="" />
        <CharacterRoller
            species={'nekovian'}
            ageSpan={[age,age]}
            sizeOptions={['medium']}
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