import React, { useState } from "react";
import EditText from "../general/HideText";
import { Character } from "../Character";
import { IDice, IRacialMod } from "../races/Races";



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


interface IGenericCharacterRoller {
    racialMod: IRacialMod[];
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

export const GenericCharacterRoller: React.FC<IGenericCharacterRoller> = ({ racialMod }) => {
    const [age, setAge] = useState(24);
    return <div>
        Age: {age}<br />
    Starting Exp: {Character.CharacterPointsHuman(age)}<br />
    Multiplier Exp: {Character.ExperienceMultiplerHuman(age)}<br />
        <EditText isEdit="edit" onChange={(str) => setAge(parseInt(str))} txt={age} explain="" />
        <CharacterRoller
            ageSpan={[age, age]}
            species={'human'}
            sizeOptions={['medium']}
            strength={getAbility(age, racialMod, 'strength')}
            agility={getAbility(age, racialMod, 'agility')}
            endurance={getAbility(age, racialMod, 'endurance')}
            intelligence={getAbility(age, racialMod, 'intelligence')}
            willpower={getAbility(age, racialMod, 'willpower')}
            perception={getAbility(age, racialMod, 'perception')}
        />
    </div>;
}

export default CharacterRoller;