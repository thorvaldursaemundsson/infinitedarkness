import React from "react";
import Section from "../Section";


const Experience: React.FC = () => {
    return <Section title='Experience points and multiplier'>
        <p>To increase skills, base stats, buy perks and traits you spend experience points, your starting experience points depend on your species and starting age. Older characters start with more experience, younger characters have a high experience multiplier which allows them to gain experience points faster.</p>
        <h4>Cost</h4>
        <p>The cost of increasing a skill is equal to the amount you increase to per step. For example if you have 4 ranks and wish to increase to 6 it costs 11, because you must first increase to 5 and then to 6. 5 + 6 = 11<br />
        Please consult the following chart when increasing multiple steps</p>
        <CostChart />

        <p>To gain experience your character needs practice. You gain experience points in a skill when you use it and it fulfills <i>any</i> of the following conditions:</p>
        <ul>
            <li>The chance to fail is at least 50% (your dice roll needs to be at least 11 or higher)</li>
            <li>You are in a dangerous situation and failure is likely to result in harm</li>
            <li>You are actively being tutored by someone who has at least 2 ranks higher in said skill</li>
        </ul>
        <p>You can only gain 1 experience point per day, if you gain experience in multiple skills then you choose which</p>
        <p>Experience multipler is applied to the maximum amount you may get, but you always only get 1 per skill, so if you hav a multipler of 2 then you can choose two skills that you qualify for</p>
        <p>If the experience multipler is a fractional number then the experienced gained is carried over to the next day, but only if you get it.
            <br />
            For example you have multiplier of 1.5, you gain experience in 2 skills on day 1, at the end of day 1 you may choose which of the two you gain a point in.<br />
            On day 2 the 0.5 surplus carries over and you have 2 possible on this day. One of which has to be the other skill you didn't choose.
        </p>
    </Section>
}
const max = 21;

interface CostLevel {
    rank: number;
    nextRanks: number[];
}

const costLevels: CostLevel[] = [];

for (let counter = 0; counter < max; counter++) {
    const cl = {
        rank: counter,
        nextRanks: Array.from(Array(max - 1), (x, index) => 0),
    };
    for (let innerCounter = counter; innerCounter < max - 1; innerCounter++) {
        cl.nextRanks[innerCounter] = innerCounter + 1;
        for (let innerSummer = innerCounter; innerSummer < max - 1; innerSummer++) {
            if (innerSummer === 0) continue;
            cl.nextRanks[innerSummer] += cl.nextRanks[innerSummer - 1];
        }
    }
    costLevels.push(cl);
}


const CostChart: React.FC = () => {
    return <table className="th20">
        <thead>
            <tr>
                <th>from/to</th>
                {costLevels.map(r => r.rank !== 0 ? <th>{r.rank}</th> : null)}
            </tr>
        </thead>
        <tbody>
            {costLevels.map(cl => cl.rank !== 20 ? <tr>
                <td>{cl.rank}</td>
                {cl.nextRanks.map(nr => <td>{nr !== 0 ? nr : '-'}</td>)}
            </tr> : null)}
        </tbody>
    </table>
}

export default Experience;