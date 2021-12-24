import React from "react";
import { useState } from "react";
import { RollDice, Selector } from "../../utils/utilFunctions";
import Indexer, { Indexed } from "../general/Indexer";
import Section from "../Section";

const EnvironmentalDamage: React.FC = () => {

    return (<Section title='Environmental effects'>
        <Indexer title='Environmental Effects'>
            <Indexed title='Falling Damage'>
                <FallingDamage />
            </Indexed>
            <Indexed title='Jumping out of a vehicle'>
                <VehicleJump />
            </Indexed>
            <Indexed title='Hazardous terrain'>
                <HazardousTerrain />
            </Indexed>
        </Indexer>
    </Section>)
};

export default EnvironmentalDamage;

const HazardousTerrain = () => {
    return <>
    Being on fire
    Standing on fire
    Standing in an inferno
    Wading in freezing water
    Swimming in freezing water
    Wading in weak/strong acid
    Swimming in weak/strong acid
    Walking over spikes
    Falling on spikes
    Collapsing structures
    </>;
}

const VehicleJump = () => {
    return <>
        <h4>Jumping off a speeding vehicle</h4>
        <p>When you jump off a speeding vehicle and wish to determine damage simply apply the following formula:</p>
        <p>Relative vehicle velocity (meters per second) divided by half = meters fallen (1 g, 1 a) damage.</p>
        <p>If you are also falling then simply add falling damage on top of speeding damage.</p>
        <i>Relative velocity means you compare velocity of the thing you're jumping off, to the thing you're jumping on.</i>
        <h4>Crashing into a vehicle</h4>
        <p>If you crash into a vehicle then apply the above formula but don't divide by half</p>
        <p>If you are inside the vehicle and secured (safety belt) then apply the same crashing into vehicle formula but divide damage by 5</p>
    </>;
}

interface IFallingData {
    height: number;
    sides: number;
    numberOfDice: number;
}

const fallingDamageConstant = (height: number, gravity: number, atmosphere: number): IFallingData => {
    const effectiveHeight = Math.floor(height * gravity);
    const numberOfDice = effectiveHeight <= 4 ?
        1
        : Math.floor(Math.pow(effectiveHeight, 0.66) - (Math.pow(effectiveHeight, .5) * Math.pow(atmosphere, 2) * 0.2));
    let sides = 4;
    if (effectiveHeight < 1) return { height: height, sides: 4, numberOfDice: 0 }
    else if (effectiveHeight < 3) sides = 6;
    else if (effectiveHeight < 4) sides = 8;
    else sides = 10;
    return { height: height, sides: sides, numberOfDice: numberOfDice };
}

const FallingDamage = () => {
    const [gravity, setGravity] = useState(1);
    const [atmopshere, setAtmosphere] = useState(1);
    const [rolledDamage, setRolledDamage] = useState<number[]>([]);

    const maxHeight = Math.min(atmopshere !== 0 ? 1 / atmopshere * (Math.sqrt(gravity) * 450) : 10000, 10000);

    const values = [...Array(Math.floor(maxHeight))]
        .map((v: any, index: number, arr: any[]) => fallingDamageConstant(index + 1, gravity, atmopshere))
        .filter((v) => v.numberOfDice > 0);

    let distinctValues: IFallingData[] = [];
    for (var index in values) {
        var val = values[index];
        distinctValues[val.sides * 100 + val.numberOfDice] = val;
    }

    return <>
        <p>Falling damage is affected by two things, gravity and atmosphere. The thicker the atmopshere the lower the terminal velocity. The higher the gravity the faster you fall and therefore take damage.</p>
        <p>The following table assumes 1g with earth like atmosphere. Damage absorbtion from armor is half.</p>
        <p>If you fall onto a soft surface you count as having fallen 2 meters less. A very soft surface counts as 3 meters less. An extremely soft counts as 4 meters less.</p>
        <p>You can also use acrobatics to reduce effective height, see acrobatics.</p>
        <p>It takes about 2 rounds to reach terminal velocity, after that you fall 300 meters per round.</p>
        <Selector label='gravity' preset={`${gravity}`} callback={(e: string) => setGravity(parseFloat(e))} values={['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1', '1.1', '1.2', '1.3', '1.4']} />
        <Selector label='atmospheric pressure' preset={`${atmopshere}`} callback={(e: string) => setAtmosphere(parseFloat(e))} values={['0', '0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1', '1.1', '1.2', '1.3', '1.4']} />
        {rolledDamage.length > 0 ? <p>{rolledDamage.join(' + ')} = {rolledDamage.reduce((a, b) => a + b)}</p> : null}

        <ul>
            {distinctValues.map(h => <li>{h.height} meters: {h.numberOfDice}d{h.sides} <button onClick={() => setRolledDamage(RollDice(h.numberOfDice, h.sides))}> roll</button></li>)}
        </ul>
    </>
}