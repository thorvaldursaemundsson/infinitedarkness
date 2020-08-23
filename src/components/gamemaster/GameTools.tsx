import React, { useState } from 'react'
import Section from '../playermanual/Section';
const dicerand = (size: number, dice: number): number => {
    let sum = 0;
    for (let i = 0; i < dice; i++) {
        sum += Math.floor(Math.random() * size + 1);
    }
    return sum;
}

const distanceFactor = (n: number): number => 1 / Math.pow(Math.max(n, 1), 1.2);

const distanceFactors = [...Array(20)].map((v, i, a) => { return { df: distanceFactor(i), d: i }; });

const ExplosiveCalc: React.FC = () => {
    const [distance, setDistance] = useState(1);
    const [damage, setDamage] = useState(0);

    const actualDamage = Math.floor(damage * distanceFactor(distance));

    return <div>
        <p>Damage lowers over distance, the exact equation is distance to the power of 1.2 where distance is minimum 1</p>
        Distance <input type='text' value={distance} onChange={(e) => setDistance(parseFloat(e.target.value))} /> <br />
        Damage <input type='text' value={damage} onChange={(e) => setDamage(parseInt(e.target.value))} />
        <button onClick={() => setDamage(dicerand(8, 12))}>12d8</button>
        <button onClick={() => setDamage(dicerand(10, 12))}>12d10</button>
        <button onClick={() => setDamage(dicerand(8, 24))}>24d8</button>
        <button onClick={() => setDamage(dicerand(10, 24))}>24d10</button>

        <br />
        Actual damage: {actualDamage}
        <table>
            <thead>
                <tr>
                    <th>Distance</th><th>Damage taken</th>
                </tr>
            </thead>
            <tbody>
                {distanceFactors.map(df => <tr><td>{df.d}</td><td>{(df.df * 100).toFixed(1)}%</td></tr>)}
            </tbody>
        </table>
    </div>;
}

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
        <label style={{ width: '60px' }}>Km <input style={{ width: '20px' }} type='radio' name='distance' onClick={() => setDistanceFactor(1000)} checked={distanceFactor === 1000} /></label>
        <label style={{ width: '60px' }}>AU <input style={{ width: '20px' }} type='radio' name='distance' onClick={() => setDistanceFactor(149597871000)} checked={distanceFactor === 149597871000} /></label>
        <br />
        Travel time: {timeToNormal(t)} (for passengers) <br />
        Outside perspective time traveled = {timeToNormal(outT)} <br />
        Top speed: {(t / 2 * a).toFixed(0)}m/s<br />
        Total length: {l} meters
        <p>Note this does not include time to navigate, dock or other activies.</p>
    </div>
}

const GameTools: React.FC = () => {
    return <>
        <h3>Game master tools</h3>
        <p>This section is an assortment of tools to help the game master run the game</p>
        <Section title='Explosion damage calculator'><ExplosiveCalc /></Section>
        <Section title='Spacetravel calculator'><DistanceCalculatorSpace /></Section>
    </>;
}

export default GameTools;