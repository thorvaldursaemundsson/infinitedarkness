import React, { useState } from 'react'
import Section from '../Section';
import DamageDiceCalc from './DamageDiceCalc';


/**
 * returns time in seconds
 * @param a acceleration, meters/second/second
 * @param l length, meters
 */
const derive = (a: number, l: number) => Math.sqrt((2 * l) / a);


function timeToNormal(seconds: number) { // day, h, m and s
    var days = Math.floor(seconds / (24 * 60 * 60));
    seconds -= days * (24 * 60 * 60);
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);
    var minutes = Math.floor(seconds / (60));
    seconds -= minutes * (60);
    return ((0 < days) ? (days.toFixed(0) + " day, ") : "") + hours.toFixed(0) + "h, " + minutes.toFixed(0) + "m and " + seconds.toFixed(0) + "s";
}

const DistanceCalculatorSpace: React.FC = () => {
    const [acceleration, setAcceleration] = useState(0.3);
    const [length, setLength] = useState(0);
    const [distanceFactor, setDistanceFactor] = useState(1000);
    const gFactor = 9.80665;
    const ly = 9200000000000000;
    const a = acceleration * gFactor;
    const l = length * distanceFactor;
    const t = derive(a, l) * 2;
    let outT = t;
    if (l > ly) { //crude and wrong representation of lorentz transformation
        outT += ((l - ly) / ly) * 60 * 60 * 24 * 356;
    }

    return <div>
        <p>Traveling from one planet to another with constant acceleration allows for reasonably short travel time even for very long distances.</p>
        Acceleration(g) <input type='text' value={acceleration} onChange={(e) => setAcceleration(parseFloat(e.target.value))} /> <br />
        Distance <input type='text' value={length} onChange={(e) => setLength(parseFloat(e.target.value))} />
        <label style={{ width: '60px' }}>Km <input className='short' type='radio' name='distance' onClick={() => setDistanceFactor(1000)} checked={distanceFactor === 1000} /></label>
        <label style={{ width: '60px' }}>AU <input className='short' type='radio' name='distance' onClick={() => setDistanceFactor(149597871000)} checked={distanceFactor === 149597871000} /></label>
        <br />
        Travel time: {timeToNormal(t)} (for passengers) <br />
        Outside perspective time traveled = {timeToNormal(outT)} <br />
        Top speed: {(t / 2 * a).toFixed(0)}m/s<br />
        Total length: {l} meters
        <p>Note this does not include time to navigate, dock or other activies.</p>
    </div>
}

const d10 = () => Math.floor(Math.random() * 10 + 1);

const EasyRoller: React.FC = () => {
    const [roll1, setRoll1] = useState(0);
    const [roll2, setRoll2] = useState(0);
    const [roll3, setRoll3] = useState(0);
    const [skill, setSkill] = useState(0);
    const [attribute, setAttribute] = useState(0);
    const roll = () => {
        setRoll1(d10());
        setRoll2(d10());
        setRoll3(d10());
    };

    let results = '';
    if (roll1 === 10 && roll2 === 10) {
        results = `(${roll1} + ${roll2} + ${roll3}) + (${skill} + ${attribute})= ${roll1 + roll2 + roll3 + skill + attribute}`;
    }
    else if (roll1 === 1 && roll2 === 1) {
        results = `(${roll1} + ${roll2} - ${roll3}) + (${skill} + ${attribute}) = ${((roll1 + roll2) - roll3) + skill + attribute}`;
    }
    else {
        results = `(${roll1} + ${roll2}) + (${skill} + ${attribute}) = ${roll1 + roll2 + skill + attribute}`
    }

    return <>
        <input className='short' type='text' value={skill} title='skill' onChange={(e) => setSkill(parseInt(e.target.value))} />
        <input className='short' type='text' value={attribute} title='attribute' onChange={(e) => setAttribute(parseInt(e.target.value))} />
        <button onClick={() => roll()}>Roll</button>
        {results}
    </>;

}

const GameTools: React.FC = () => {
    return <>
        <h3>Game master tools</h3>
        <p>This section is an assortment of tools to help the game master run the game</p>
        <Section title='Spacetravel calculator'><DistanceCalculatorSpace /></Section>
        <Section title='Easy Roller'><EasyRoller /></Section>
        <Section title='Damage Dice Calculator'><DamageDiceCalc /></Section>
    </>;
}

export default GameTools;