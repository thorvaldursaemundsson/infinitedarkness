import React from 'react';
import { Desires, Needs, Weaknesses } from '../CharacterGenerator/interactives';
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
}

const randomFromList = (list: string[]): string => list[Math.floor(Math.random() * list.length)];


const randomHuman = (): INonPlayerCharacter => {
    const gender = Math.random() > .5 ? 'male' : 'female';
    const name = (gender === 'male' ? randomFromList(maleHumanNames) : randomFromList(femaleHumanNames)) + ' ' + randomFromList(maleHumanNames);

    return {
        name: name,
        quirts: `${randomFromList(quirks)}, ${randomFromList(quirks)}`,
        job: ``,
        about: `${name} is ${Math.floor(Math.random() * Math.random() * 80) + 15} years old, is a ${gender}`,
        weakness: randomFromList(Weaknesses),
        need: randomFromList(Needs),
        desire: randomFromList(Desires)
    };
};

const CharacterGenerator: React.FC = () => {

    const randomHumans = [...Array(10)].map(i => randomHuman());

    return <>{randomHumans.map(h => {
        return <div className="divcol2">
                <div>
                    <b>Name: </b>{h.name} {h.job}<br/>
                    {h.about}
                    <br/>
                    {h.quirts}
                </div>
                <div>
                    <b>Weakness</b>: {h.weakness}<br/>
                    <b>Need</b>: {h.need}<br/>
                    <b>Desire</b>: {h.desire}<br/>
                </div>
            </div>
    })}</>
};

export default CharacterGenerator;


