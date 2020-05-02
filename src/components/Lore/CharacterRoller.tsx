import React, { useState } from "react";

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
                STR -> {sumN(cd.strength)}<br />
                AGI -> {sumN(cd.agility)}<br />
                END -> {sumN(cd.endurance)}<br />
                PER -> {sumN(cd.perception)}<br />
                WIL -> {sumN(cd.willpower)}<br />
                INT -> {sumN(cd.intelligence)}<br />
            </div>
        })}
    </div>);
}

const sumN = (n:number[]) => ` ${n.join(' + ')} = ${n.reduce(function(a, b) { return a + b; }, 0)}`;

const rollCharacterData = (dice: ICharacterRoller, setter: React.Dispatch<React.SetStateAction<ICharacterData[]>>) => {
    let charData: ICharacterData[] = [];

    for (let counter = 0; counter < 3; counter++) {
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

export default CharacterRoller;