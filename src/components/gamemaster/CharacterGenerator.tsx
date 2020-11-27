import React from 'react';
import { femaleHumanNames, maleHumanNames } from '../CharacterGenerator/names';
import { quirks } from '../CharacterGenerator/quirks';

interface INonPlayerCharacter {
    name: string;
    quirts: string;
    job: string;
    about: string;
}

const randomFromList = (list: string[]): string => list[Math.floor(Math.random() * list.length)];


const randomHuman = (): INonPlayerCharacter => {
    const gender = Math.random() > .5 ? 'male' : 'female';
    const name = (gender === 'male' ? randomFromList(maleHumanNames) : randomFromList(femaleHumanNames)) + ' ' + randomFromList(maleHumanNames);

    return {
        name: name,
        quirts: `${randomFromList(quirks)}, ${randomFromList(quirks)}`,
        job: ``,
        about: `${name} is ${Math.floor(Math.random() * Math.random() * 80) + 20} years old, is a ${gender}`,
    };
};

const CharacterGenerator: React.FC = () => {

    const randomHumans = [...Array(10)].map(i => randomHuman());

    return <>{randomHumans.map(h => {
        return <><p><b>{h.name}</b></p>
            <p>{h.about}<br />{h.quirts}</p></>
    })}</>
};

export default CharacterGenerator;


