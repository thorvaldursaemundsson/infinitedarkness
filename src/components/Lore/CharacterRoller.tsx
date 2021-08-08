import React, { useState } from "react";
import EditText from "../general/HideText";
import { IDice, IRaceData, IRacialMod } from "../races/Races";



export interface ICharacterData {
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
        <button onClick={() => rollCharacterDataAndSet(props, setCharacterData)}>Roll</button>

        <div className="flexContainer">
            Strength {props.strength.numberOfDice}d{props.strength.sidesPerDice}<br />
            Endurance {props.endurance.numberOfDice}d{props.endurance.sidesPerDice}<br />
            Agility {props.agility.numberOfDice}d{props.agility.sidesPerDice}<br />
            Perception {props.perception.numberOfDice}d{props.perception.sidesPerDice}<br />
            Intelligence {props.intelligence.numberOfDice}d{props.intelligence.sidesPerDice}<br />
            Willpower {props.willpower.numberOfDice}d{props.willpower.sidesPerDice}<br />
        </div>

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

export const sumN = (n: number[]) => `  ${n.reduce(function (a, b) { return a + b; }, 0)}`;
const howManyTimesCanYouReroll = 3;
export const rollCharacterData = (dice: IRacialMod): ICharacterData[] => {
    let charData: ICharacterData[] = [];
    if (dice === undefined) {
        return [{
            strength: [4],
            agility: [4],
            endurance: [4],
            perception: [4],
            intelligence: [4],
            willpower: [4]
        }];
    }
    for (let counter = 0; counter < howManyTimesCanYouReroll; counter++) {
        charData.push({
            strength: roll(dice.strength),
            agility: roll(dice.agility),
            endurance: roll(dice.endurance),
            perception: roll(dice.perception),
            willpower: roll(dice.willpower),
            intelligence: roll(dice.intelligence),
        });
    }
    return charData;
}


export const rollCharacterDataAndSet = (dice: IRacialMod, setter: React.Dispatch<React.SetStateAction<ICharacterData[]>>) => {
    let charData: ICharacterData[] = rollCharacterData(dice);
    setter(charData);
}

const roll = (dice: IDice) => {
    let numbers: number[] = [];
    for (let counter = 0; counter < dice.numberOfDice; counter++) {
        numbers.push(Math.floor((Math.random() * dice.sidesPerDice)) + 1);
    }
    return numbers;
}


interface IGenericCharacterRoller {
    raceData: IRaceData;
}

const getAbility = (age: number, racialMod: IRacialMod[], ability: 'strength' | 'agility' | 'endurance' | 'perception' | 'intelligence' | 'willpower') => {
    var x = racialMod.find(pred => pred.ageSpan[0] < age && pred.ageSpan[1] > age);
    if (x === undefined) {
        x = racialMod[0];
    }
    switch (ability) {
        case 'agility': return x.agility;
        case 'strength': return x.strength;
        case 'endurance': return x.endurance;
        case 'perception': return x.perception;
        case 'intelligence': return x.intelligence;
        case 'willpower': return x.willpower;
    }
}

export const GenericCharacterRoller: React.FC<IGenericCharacterRoller> = ({ raceData }) => {
    const [age, setAge] = useState(24);
    return <div>
        Age: {age}<br />
    Starting Exp: {raceData.experiencePoints(age) }<br />
    Multiplier Exp: {raceData.experienceMultipler(age)}<br />
        <EditText isEdit="edit" onChange={(str) => setAge(parseInt(str))} txt={age} explain="" />
        <CharacterRoller
            ageSpan={[age, age]}
            species={'human'}
            sizeOptions={['medium']}
            strength={getAbility(age, raceData.racialMods, 'strength')}
            agility={getAbility(age, raceData.racialMods, 'agility')}
            endurance={getAbility(age, raceData.racialMods, 'endurance')}
            intelligence={getAbility(age, raceData.racialMods, 'intelligence')}
            willpower={getAbility(age, raceData.racialMods, 'willpower')}
            perception={getAbility(age, raceData.racialMods, 'perception')}
        />
    </div>;
}

export default CharacterRoller;