import React, { useState } from 'react';
import CharacterExpansion, { INonPlayerCharacter } from '../CharacterGenerator/CharacterExpansion';
import { Desires, Enemies, Needs, RedeemingQualities, Rumors, Secrets, Weaknesses } from '../CharacterGenerator/interactives';
import { Jobs } from '../CharacterGenerator/jobs';
import { humanEyeColors, humanHairColors, humanSkinColors } from '../CharacterGenerator/looks';
import { femaleHumanNames, maleHumanNames } from '../CharacterGenerator/names';
import { quirks } from '../CharacterGenerator/quirks';
import Section from '../playermanual/Section';


const randomFromList = (list: string[]): string => list[Math.floor(Math.random() * list.length)];
const oddsOrRandomFromList = (percentage: number, list: string[]) => (Math.random() * 100) < percentage ? randomFromList(list) : undefined;

const dice = (numberOfDice: number, sidesPerDice: 4 | 6 | 8 | 10 | 12 | 20) => [...Array(numberOfDice)].map(n => Math.floor(Math.random() * sidesPerDice + 1)).reduce((a, b) => a + b);


const randomHuman = (): INonPlayerCharacter => {
    const gender = Math.random() > .5 ? 'M' : 'F';
    const name = (gender === 'M' ? randomFromList(maleHumanNames) : randomFromList(femaleHumanNames)) + ' ' + randomFromList(maleHumanNames);
    const age = dice(4, 12) + 8;
    return {
        age: age,
        species: 'human',
        name: name,
        quirts: `${randomFromList(quirks)}, ${randomFromList(quirks)}`,
        job: randomFromList(Jobs),
        about: `${name} is ${age} years old, has ${randomFromList(humanSkinColors)} skin, has ${randomFromList(humanHairColors)} hair and ${randomFromList(humanEyeColors)} eyes`,
        weakness: randomFromList(Weaknesses),
        need: randomFromList(Needs),
        desire: randomFromList(Desires),
        height: 80 + dice(16, 10),
        weight: 30 + dice(4, 20),
        gender: gender,
        enemy: oddsOrRandomFromList(25, Enemies),
        rumors: oddsOrRandomFromList(0, Rumors),
        secret: oddsOrRandomFromList(66, Secrets),
        redeemingQuality: oddsOrRandomFromList(66, RedeemingQualities)
    };
};

const getRandomHumans = () => [...Array(10)].map(i => randomHuman());

const CharacterGenerator: React.FC = () => {
    const [randomCharacters, setRandomCharacters] = useState(getRandomHumans());

    return <>
        <button onClick={() => setRandomCharacters(getRandomHumans())}>New random humans</button>
        {randomCharacters.map(h => {
            return <>
                <div className="divcol2">
                    <div>
                        <b>Name: </b>{h.name}, {h.gender} - {h.job}<br />
                        {h.about}
                        <br />
                        {h.quirts}, {h.height} cm {h.weight} kg<br />
                        {h.enemy && <>Enemy: {h.enemy}<br /></>}
                        {h.rumors && <>Rumors: {h.rumors}<br /></>}
                        {h.secret && <>Secret: {h.secret}<br /></>}
                        {h.redeemingQuality && <>Redeeming quality: {h.redeemingQuality}<br /></>}
                    </div>
                    <div>
                        <b>Weakness</b>: {h.weakness}<br />
                        <b>Need</b>: {h.need}<br />
                        <b>Desire</b>: {h.desire}<br />
                    </div>
                </div>
                <Section title={`Expand on ${h.name}`}><CharacterExpansion npcBase={h} /></Section>
            </>
        })}</>
};


export default CharacterGenerator;


