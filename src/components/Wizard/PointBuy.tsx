import React, { useReducer } from 'react';
import { CharacterSize } from '../Character';
import { humans } from '../races/Humans';
import { merlions } from '../races/Merlions';
import { nekovian } from '../races/Nekovians';
import { IRacialMod, race } from '../races/Races';
import { shambras } from '../races/Shambras';

export interface IStats {
    strength: number;
    agility: number;
    endurance: number;
    intelligence: number;
    perception: number;
    willpower: number;
    age: number;
    species: race;
    size: CharacterSize;
    restExp: number;
}

interface IPointBuyProps {
    startingSpecies: race;
    startingAge: number;
    onComplete: (output: IStats) => void;
}

const pickRacialMod = (species: race | undefined, age: number | undefined) => {
    if (species === undefined || age === undefined) return undefined;
    let output: IRacialMod | undefined = undefined;
    switch (species) {
        case 'human':
            output = humans.find(irm => irm.ageSpan[1] >= age && irm.ageSpan[0] <= age);
            break;
        case 'merlion':
            output = merlions.find(irm => irm.ageSpan[1] >= age && irm.ageSpan[0] <= age);
            break;
        case 'nekovian':
            output = nekovian.find(irm => irm.ageSpan[1] >= age && irm.ageSpan[0] <= age);
            break;
        case 'shambras':
            output = shambras.find(irm => irm.ageSpan[1] >= age && irm.ageSpan[0] <= age);
            break;
    }
    return output;
}

interface IDispatch {
    strength?: number;
    agility?: number;
    endurance?: number;
    intelligence?: number;
    perception?: number;
    willpower?: number;
    age?: number;
    species?: race;
    size?: CharacterSize;
}

const IStatsReducer = (state: IStats, action: IDispatch): IStats => {
    return { ...state, ...action };
}
const abilityMultiplier = 4;
const fSumAbilities = (n: number): number => {
    let x = 0;
    for (let i = 0; i <= n; i++) {
        x += i * abilityMultiplier;
    }
    return x;
};

const calculateCost = (currentStats: IStats): number => {
    return fSumAbilities(currentStats.strength) +
        fSumAbilities(currentStats.endurance) +
        fSumAbilities(currentStats.agility) +
        fSumAbilities(currentStats.perception) +
        fSumAbilities(currentStats.intelligence) +
        fSumAbilities(currentStats.willpower);
}

const getStrengthMod = (size: CharacterSize) => {
    switch (size) {
        case 'minute': return -4;
        case 'tiny': return -2;
        case 'small': return -1;
        case 'medium': return 0;
        case 'large': return 1;
        case 'huge': return 2;
        case 'gigantic': return 4;
        case 'colossal': return 8;
        case 'titanic': return 12;
    }
}

const costAtP = (current: number) => {
    return (current + 1) * abilityMultiplier;
};
const costAtM = (current: number) => {
    return (current) * abilityMultiplier;
};

const PointBuy: React.FC<IPointBuyProps> = ({ startingSpecies, startingAge, onComplete }) => {
    const [currentStats, setCurrentStats] = useReducer(IStatsReducer, {
        species: startingSpecies,
        age: startingAge || 24,
        strength: 4,
        agility: 4,
        endurance: 4,
        intelligence: 4,
        perception: 4,
        willpower: 4,
        size: 'medium',
        restExp: 0,
    });

    const currentRacialMod = pickRacialMod(startingSpecies, startingAge);
    if (currentRacialMod === undefined) {
        return <>please choose valid species and age range</>;
    }
    const max = abilityMultiplier * 80;
    const pointsLeft = (max - calculateCost(currentStats));

    const complete = () => {
        onComplete({
            ...currentStats,
            strength: currentStats.strength + currentRacialMod.strength.pointBuyMod + getStrengthMod(currentStats.size),
            agility: currentStats.agility + currentRacialMod.agility.pointBuyMod,
            endurance: currentStats.endurance + currentRacialMod.endurance.pointBuyMod,
            perception: currentStats.perception + currentRacialMod.perception.pointBuyMod,
            intelligence: currentStats.intelligence + currentRacialMod.intelligence.pointBuyMod,
            willpower: currentStats.willpower + currentRacialMod.willpower.pointBuyMod,
            restExp: pointsLeft
        });
    }

    return <>
        <h4>Point buy</h4>
        {startingSpecies} | {startingAge}
        <table>
            <thead>
                <tr>
                    <th style={{ width: '20%' }}>Ability</th>
                    <th style={{ width: '20%' }}>Value</th>
                    <th style={{ width: '20%' }}>Species mod</th>
                    <th style={{ width: '20%' }}>Final value</th>
                    <th style={{ width: '20%' }}>Points left: {pointsLeft} / {max}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Strength</td>
                    <td>{currentStats.strength}</td>
                    <td>{currentRacialMod.strength.pointBuyMod + getStrengthMod(currentStats.size)}</td>
                    <td>{currentStats.strength + currentRacialMod.strength.pointBuyMod + getStrengthMod(currentStats.size)}</td>
                    <td><button onClick={() => setCurrentStats({ strength: currentStats.strength + 1 })}>+ ({costAtP(currentStats.strength)})</button>
                        <button onClick={() => setCurrentStats({ strength: Math.max(currentStats.strength - 1, 1) })}>- ({costAtM(currentStats.strength)})</button></td>
                </tr>
                <tr>
                    <td>Endurance</td>
                    <td>{currentStats.endurance}</td>
                    <td>{currentRacialMod.endurance.pointBuyMod}</td>
                    <td>{currentStats.endurance + currentRacialMod.endurance.pointBuyMod}</td>
                    <td><button onClick={() => setCurrentStats({ endurance: currentStats.endurance + 1 })}>+ ({costAtP(currentStats.endurance)})</button>
                        <button onClick={() => setCurrentStats({ endurance: Math.max(currentStats.endurance - 1, 1) })}>- ({costAtM(currentStats.endurance)})</button></td>
                </tr>
                <tr>
                    <td>Agility</td>
                    <td>{currentStats.agility}</td>
                    <td>{currentRacialMod.agility.pointBuyMod}</td>
                    <td>{currentStats.agility + currentRacialMod.agility.pointBuyMod}</td>
                    <td><button onClick={() => setCurrentStats({ agility: currentStats.agility + 1 })}>+ ({costAtP(currentStats.agility)})</button>
                        <button onClick={() => setCurrentStats({ agility: Math.max(currentStats.agility - 1, 1) })}>- ({costAtM(currentStats.agility)})</button></td>
                </tr>
                <tr>
                    <td>Perception</td>
                    <td>{currentStats.perception}</td>
                    <td>{currentRacialMod.perception.pointBuyMod}</td>
                    <td>{currentStats.perception + currentRacialMod.perception.pointBuyMod}</td>
                    <td><button onClick={() => setCurrentStats({ perception: currentStats.perception + 1 })}>+ ({costAtP(currentStats.perception)})</button>
                        <button onClick={() => setCurrentStats({ perception: Math.max(currentStats.perception - 1, 1) })}>- ({costAtM(currentStats.perception)})</button></td>
                </tr>
                <tr>
                    <td>Intelligence</td>
                    <td>{currentStats.intelligence}</td>
                    <td>{currentRacialMod.intelligence.pointBuyMod}</td>
                    <td>{currentStats.intelligence + currentRacialMod.intelligence.pointBuyMod}</td>
                    <td><button onClick={() => setCurrentStats({ intelligence: currentStats.intelligence + 1 })}>+ ({costAtP(currentStats.intelligence)})</button>
                        <button onClick={() => setCurrentStats({ intelligence: Math.max(currentStats.intelligence - 1, 1) })}>- ({costAtM(currentStats.intelligence)})</button></td>
                </tr>
                <tr>
                    <td>Willpower</td>
                    <td>{currentStats.willpower}</td>
                    <td>{currentRacialMod.willpower.pointBuyMod}</td>
                    <td>{currentStats.willpower + currentRacialMod.willpower.pointBuyMod}</td>
                    <td><button onClick={() => setCurrentStats({ willpower: currentStats.willpower + 1 })}>+ ({costAtP(currentStats.willpower)})</button>
                        <button onClick={() => setCurrentStats({ willpower: Math.max(currentStats.willpower - 1, 1) })}>- ({costAtM(currentStats.willpower)})</button></td>
                </tr>
            </tbody>
        </table>
        <h5>Size</h5>
        {currentRacialMod.sizeOptions.map(size => {
            return <label className="shortLabel"> <input type='radio' name='size' checked={currentStats.size === size} onClick={() => setCurrentStats({ size: size })}></input> {size}</label>;
        })}
        <br />
        <button onClick={() => complete()}>Done</button>
    </>;
}


export default PointBuy;