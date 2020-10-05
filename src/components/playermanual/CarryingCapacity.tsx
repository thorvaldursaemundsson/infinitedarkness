import React, { useState } from 'react';
import Section from './Section';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const shortWidth:CSSProperties = {
    width: '25%'
};

const CarryingCapacity = () => {
    const [currentWeight, setCurrentWeight] = useState(80);
    const [cargoWeight, setCargoWeight] = useState(0);
    const [strength, setStrength] = useState(5);
    const [previousGravity, setPreviousGravity] = useState(100);
    const [currentGravity, setCurrentGravity] = useState(100);

    const gravityFactor = currentGravity / previousGravity;

    const weightFactor = (currentWeight + cargoWeight) * gravityFactor - currentWeight;

    const strengthFactor = weightFactor / strength;
    let penalty = '0';
    if (strengthFactor <= 4) { }
    else if (strengthFactor <= 8) penalty = '-1';
    else if (strengthFactor <= 12) penalty = '-2';
    else if (strengthFactor <= 16) penalty = '-4';
    else if (strengthFactor <= 20) penalty = '-8';
    else if (strengthFactor <= 24) penalty = '-16';
    else if (strengthFactor <= 28) penalty = 'max';
    else if (strengthFactor <= 32) penalty = 'drag';
    else  penalty = 'too heavy';

    return (<Section title='Carrying Capacity'>
        <h3>Carrying Capacity</h3>
        <p>There is only so much weight you can put on a Shambra before they lay down and give up</p>
        <p>Being over capacity goes in phases, at or below the first you suffer no penalty. Then as you increase in weight you begin to suffer various penalties</p>
        <p>Penalty applies to swim and half to climb, jump, quarter to acrobatics</p>
        <ul>
            <li>Without effect your maximum speed is Sprint (5x)</li>
            <li>-1 You can no longer sprint, limited to run (x4), -4 penalty</li>
            <li>-2 You can no longer run, limited to jog (x3), -8 penalty</li>
            <li>-2 You can no longer jog, limited to power walk (x2), -12 penalty</li>
            <li>-4 You can no longer power walk, limited to walk (x1), -16 penalty</li>
            <li>-8 You can only walk at half speed (x0.5), -20 penalty</li>
            <li>-16 You can only walk at quarter speed (0.25x), -24 penalty</li>
            <li>Max is how much you can deadlift</li>
            <li>Drag is how much you can drag off the ground</li>
        </ul>
        <table>
            <thead>
                <tr>
                    <th>Strength</th>
                    <th>No effect</th>
                    <th>-1</th>
                    <th>-2</th>
                    <th>-4</th>
                    <th>-8</th>
                    <th>-16</th>
                    <th>Max</th>
                    <th>Drag</th>
                </tr>
            </thead>
            <tbody>
                {[...new Array(18)].map((v, str, ar) => <tr>
                    <td>{(str + 1)}</td>
                    <td>{(str + 1) * 4}</td>
                    <td>{(str + 1) * 8}</td>
                    <td>{(str + 1) * 12}</td>
                    <td>{(str + 1) * 16}</td>
                    <td>{(str + 1) * 20}</td>
                    <td>{(str + 1) * 24}</td>
                    <td>{(str + 1) * 28}</td>
                    <td>{(str + 1) * 32}</td>
                </tr>)}
            </tbody>
        </table>
        <h4>Gravity and weight</h4>
        <p>Characters that live on a planet or system grow accustomed to the local gravity.
            So for as long as characters don't leave their local gravity well all carrying capacity should be assumed to be normalized.</p>
        <p>However, if a character leaves their planet or station to another planet or station with a different gravity then they are not accustomed to it.
        To find out the difference take the first gravity and divide by the second, then multiply this with the character's body weight plus cargo, then minus the character's body weight.
        </p>
        <label style={shortWidth}>Stength</label> <input  style={shortWidth}type='input' value={strength} onChange={e => setStrength(parseInt(e.target.value))} /><br />
        <label style={shortWidth}>Character weight</label> <input  style={shortWidth}type='input' value={currentWeight} onChange={e => setCurrentWeight(parseInt(e.target.value))} /><br />
        <label style={shortWidth}>cargo weight</label> <input style={shortWidth} type='input' value={cargoWeight} onChange={e => setCargoWeight(parseInt(e.target.value))} /><br />
        <label style={shortWidth}>Previous gravity %</label> <input style={shortWidth} type='input' value={previousGravity} onChange={e => setPreviousGravity(parseFloat(e.target.value))} /><br />
        <label style={shortWidth}>Current gravity %</label> <input style={shortWidth} type='input' value={currentGravity} onChange={e => setCurrentGravity(parseFloat(e.target.value))} /><br />
        <label style={shortWidth}>Current Weight</label> {weightFactor}<br />
        <label style={shortWidth}>Current Penalty</label> {penalty}
    </Section>);
}

export default CarryingCapacity;