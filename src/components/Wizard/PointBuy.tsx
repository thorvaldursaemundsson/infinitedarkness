import React, { useReducer } from 'react';
import { CharacterSize } from '../Character';

type race = 'human' | 'shambras' | 'merlion' | 'nekovian';
interface IRacialMod {
    ageSpan: [number, number];
    species: race;
    strengthMod: number;
    enduranceMod: number;
    agilityMod: number;
    intelligenceMod: number;
    perceptionMod: number;
    willpowerMod: number;
    sizeOptions: CharacterSize[];
}

const humans: IRacialMod[] = [
    {
        ageSpan: [18, 26],
        species: 'human',
        strengthMod: 0,
        enduranceMod: 2,
        agilityMod: 1,
        perceptionMod: 2,
        intelligenceMod: 1,
        willpowerMod: -1,
        sizeOptions: ['small', 'medium', 'large']
    },
    {
        ageSpan: [27, 40],
        species: 'human',
        strengthMod: 1,
        enduranceMod: 2,
        agilityMod: 1,
        perceptionMod: 1,
        intelligenceMod: 1,
        willpowerMod: 0,
        sizeOptions: ['small', 'medium', 'large']
    },
    {
        ageSpan: [41, 80],
        species: 'human',
        strengthMod: 1,
        enduranceMod: 1,
        agilityMod: 0,
        perceptionMod: 0,
        intelligenceMod: 1,
        willpowerMod: 1,
        sizeOptions: ['small', 'medium', 'large']
    },
    {
        ageSpan: [81, 180],
        species: 'human',
        strengthMod: 0,
        enduranceMod: 0,
        agilityMod: -1,
        perceptionMod: -1,
        intelligenceMod: 0,
        willpowerMod: 0,
        sizeOptions: ['small', 'medium', 'large']
    },
];

const merlions: IRacialMod[] = [
    {
        ageSpan: [18, 24],
        species: 'merlion',
        strengthMod: -1,
        enduranceMod: 0,
        agilityMod: 1,
        perceptionMod: 1,
        intelligenceMod: 4,
        willpowerMod: 1,
        sizeOptions: ['tiny', 'small', 'medium']
    },
    {
        ageSpan: [25, 40],
        species: 'merlion',
        strengthMod: -1,
        enduranceMod: 0,
        agilityMod: 1,
        perceptionMod: 1,
        intelligenceMod: 4,
        willpowerMod: 0,
        sizeOptions: ['tiny', 'small', 'medium']
    },
    {
        ageSpan: [41, 80],
        species: 'merlion',
        strengthMod: 0,
        enduranceMod: -1,
        agilityMod: 0,
        perceptionMod: 0,
        intelligenceMod: 4,
        willpowerMod: 1,
        sizeOptions: ['tiny', 'small', 'medium']
    },
    {
        ageSpan: [81, 180],
        species: 'merlion',
        strengthMod: 0,
        enduranceMod: -1,
        agilityMod: 0,
        perceptionMod: 0,
        intelligenceMod: 4,
        willpowerMod: 1,
        sizeOptions: ['tiny', 'small', 'medium']
    },
];

const shambras: IRacialMod[] = [
    {
        ageSpan: [15, 20],
        species: 'shambras',
        strengthMod: -1,
        enduranceMod: -1,
        agilityMod: 1,
        perceptionMod: 2,
        intelligenceMod: -2,
        willpowerMod: -1,
        sizeOptions: ['tiny', 'small', 'medium']
    },
    {
        ageSpan: [21, 25],
        species: 'shambras',
        strengthMod: -1,
        enduranceMod: -1,
        agilityMod: 1,
        perceptionMod: 2,
        intelligenceMod: -1,
        willpowerMod: 0,
        sizeOptions: ['small', 'medium']
    },
    {
        ageSpan: [26, 35],
        species: 'shambras',
        strengthMod: 0,
        enduranceMod: 0,
        agilityMod: 0,
        perceptionMod: 2,
        intelligenceMod: -1,
        willpowerMod: 1,
        sizeOptions: ['small', 'medium', 'large']
    },
    {
        ageSpan: [36, 50],
        species: 'shambras',
        strengthMod: 0,
        enduranceMod: 0,
        agilityMod: 0,
        perceptionMod: 2,
        intelligenceMod: 0,
        willpowerMod: 1,
        sizeOptions: ['medium', 'large']
    },
    {
        ageSpan: [51, 100],
        species: 'shambras',
        strengthMod: 1,
        enduranceMod: 1,
        agilityMod: -1,
        perceptionMod: 1,
        intelligenceMod: 0,
        willpowerMod: 1,
        sizeOptions: ['medium', 'large', 'huge']
    },
    {
        ageSpan: [101, 300],
        species: 'shambras',
        strengthMod: 2,
        enduranceMod: 1,
        agilityMod: -2,
        perceptionMod: 1,
        intelligenceMod: 1,
        willpowerMod: 1,
        sizeOptions: ['large', 'huge']
    },
];

const nekovian: IRacialMod[] = [
    {
        ageSpan: [16, 24],
        species: 'nekovian',
        strengthMod: 2,
        enduranceMod: 1,
        agilityMod: 2,
        perceptionMod: 0,
        intelligenceMod: 0,
        willpowerMod: 2,
        sizeOptions: ['tiny', 'small']
    },
    {
        ageSpan: [25, 36],
        species: 'nekovian',
        strengthMod: 2,
        enduranceMod: 2,
        agilityMod: 1,
        perceptionMod: 0,
        intelligenceMod: 1,
        willpowerMod: 2,
        sizeOptions: ['tiny', 'small']
    },
    {
        ageSpan: [37, 60],
        species: 'nekovian',
        strengthMod: 1,
        enduranceMod: 1,
        agilityMod: 1,
        perceptionMod: -1,
        intelligenceMod: 0,
        willpowerMod: 2,
        sizeOptions: ['tiny', 'small']
    },
    {
        ageSpan: [61, 120],
        species: 'nekovian',
        strengthMod: 1,
        enduranceMod: 0,
        agilityMod: 0,
        perceptionMod: -2,
        intelligenceMod: 0,
        willpowerMod: 2,
        sizeOptions: ['tiny', 'small']
    },
];

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
    restExp:number;
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

const fSumAbilities = (n: number): number => {
    let x = 0;
    for (let i = 0; i <= n; i++) {
        x += i * 4;
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

const getStrengthMod = (size: CharacterSize): number => {
    switch (size) {
        case 'tiny': return -2;
        case 'small': return -1;
        case 'medium': return 0;
        case 'large': return 1;
        case 'huge': return 2;

    }
}

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
    const max = 320;
    const pointsLeft = (max - calculateCost(currentStats));

    const complete = () => {
        onComplete({
            ...currentStats,
            strength: currentStats.strength + currentRacialMod.strengthMod + getStrengthMod(currentStats.size),
            agility: currentStats.agility + currentRacialMod.agilityMod,
            endurance: currentStats.endurance + currentRacialMod.enduranceMod,
            perception: currentStats.perception + currentRacialMod.perceptionMod,
            intelligence: currentStats.intelligence + currentRacialMod.intelligenceMod,
            willpower: currentStats.willpower + currentRacialMod.willpowerMod,
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
                    <td>{currentRacialMod.strengthMod + getStrengthMod(currentStats.size)}</td>
                    <td>{currentStats.strength + currentRacialMod.strengthMod + getStrengthMod(currentStats.size)}</td>
                    <td><button onClick={() => setCurrentStats({ strength: currentStats.strength + 1 })}>+</button>
                        <button onClick={() => setCurrentStats({ strength: Math.max(currentStats.strength - 1, 1) })}>-</button></td>
                </tr>
                <tr>
                    <td>Endurance</td>
                    <td>{currentStats.endurance}</td>
                    <td>{currentRacialMod.enduranceMod}</td>
                    <td>{currentStats.endurance + currentRacialMod.enduranceMod}</td>
                    <td><button onClick={() => setCurrentStats({ endurance: currentStats.endurance + 1 })}>+</button>
                        <button onClick={() => setCurrentStats({ endurance: Math.max(currentStats.endurance - 1, 1) })}>-</button></td>
                </tr>
                <tr>
                    <td>Agility</td>
                    <td>{currentStats.agility}</td>
                    <td>{currentRacialMod.agilityMod}</td>
                    <td>{currentStats.agility + currentRacialMod.agilityMod}</td>
                    <td><button onClick={() => setCurrentStats({ agility: currentStats.agility + 1 })}>+</button>
                        <button onClick={() => setCurrentStats({ agility: Math.max(currentStats.agility - 1, 1) })}>-</button></td>
                </tr>
                <tr>
                    <td>Perception</td>
                    <td>{currentStats.perception}</td>
                    <td>{currentRacialMod.perceptionMod}</td>
                    <td>{currentStats.perception + currentRacialMod.perceptionMod}</td>
                    <td><button onClick={() => setCurrentStats({ perception: currentStats.perception + 1 })}>+</button>
                        <button onClick={() => setCurrentStats({ perception: Math.max(currentStats.perception - 1, 1) })}>-</button></td>
                </tr>
                <tr>
                    <td>Intelligence</td>
                    <td>{currentStats.intelligence}</td>
                    <td>{currentRacialMod.intelligenceMod}</td>
                    <td>{currentStats.intelligence + currentRacialMod.intelligenceMod}</td>
                    <td><button onClick={() => setCurrentStats({ intelligence: currentStats.intelligence + 1 })}>+</button>
                        <button onClick={() => setCurrentStats({ intelligence: Math.max(currentStats.intelligence - 1, 1) })}>-</button></td>
                </tr>
                <tr>
                    <td>Willpower</td>
                    <td>{currentStats.willpower}</td>
                    <td>{currentRacialMod.willpowerMod}</td>
                    <td>{currentStats.willpower + currentRacialMod.willpowerMod}</td>
                    <td><button onClick={() => setCurrentStats({ willpower: currentStats.willpower + 1 })}>+</button>
                        <button onClick={() => setCurrentStats({ willpower: Math.max(currentStats.willpower - 1, 1) })}>-</button></td>
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