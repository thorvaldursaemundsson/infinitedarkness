import React, { useState } from 'react';
import { Desires, Needs, Weaknesses } from '../CharacterGenerator/interactives';
import { Jobs } from '../CharacterGenerator/jobs';
import { humanEyeColors, humanHairColors, humanSkinColors } from '../CharacterGenerator/looks';
import { femaleHumanNames, maleHumanNames } from '../CharacterGenerator/names';
import { quirks } from '../CharacterGenerator/quirks';

interface INonPlayerCharacter {
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
}

const randomFromList = (list: string[]): string => list[Math.floor(Math.random() * list.length)];

const dice = (numberOfDice: number, sidesPerDice: 4 | 6 | 8 | 10 | 12 | 20) => [...Array(numberOfDice)].map(n => Math.floor(Math.random() * sidesPerDice + 1)).reduce((a, b) => a + b);


const randomHuman = (): INonPlayerCharacter => {
    const gender = Math.random() > .5 ? 'M' : 'F';
    const name = (gender === 'M' ? randomFromList(maleHumanNames) : randomFromList(femaleHumanNames)) + ' ' + randomFromList(maleHumanNames);

    return {
        name: name,
        quirts: `${randomFromList(quirks)}, ${randomFromList(quirks)}`,
        job: randomFromList(Jobs),
        about: `${name} is ${dice(5, 12) + 16} years old, has ${randomFromList(humanSkinColors)} skin, has ${randomFromList(humanHairColors)} hair and ${randomFromList(humanEyeColors)} eyes`,
        weakness: randomFromList(Weaknesses),
        need: randomFromList(Needs),
        desire: randomFromList(Desires),
        height: 110 + dice(20, 6),
        weight: 40 + dice(4, 20),
        gender: gender,
    };
};

const getRandomHumans = () => [...Array(10)].map(i => randomHuman());

const CharacterGenerator: React.FC = () => {
    const [randomCharacters, setRandomCharacters] = useState(getRandomHumans());

    return <>
        <button onClick={() => setRandomCharacters(getRandomHumans())}>New random humans</button>
        {randomCharacters.map(h => {
            return <div className="divcol2">
                <div>
                    <b>Name: </b>{h.name}, {h.gender} - {h.job}<br />
                    {h.about}
                    <br />
                    {h.quirts}, {h.height} cm {h.weight} kg
                </div>
                <div>
                    <b>Weakness</b>: {h.weakness}<br />
                    <b>Need</b>: {h.need}<br />
                    <b>Desire</b>: {h.desire}<br />
                </div>
            </div>
        })}</>
};

export default CharacterGenerator;


