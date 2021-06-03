import { CharacterSize } from "../Character";

export type race = 'human' | 'shambras' | 'merlion' | 'nekovian' | 'synth';

export interface IDice {
    numberOfDice: 1 | 2 | 3 | 4;
    sidesPerDice: 2 | 4 | 6 | 8 | 10 | 12;
    pointBuyMod: -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
}

export interface IRaceData {
    racialMods: IRacialMod[];
    experienceMultipler: (age: number) => number;
    experiencePoints: (age: number) => number;
}

export interface IRacialMod {
    ageSpan: [number, number];
    species: race;
    strength: IDice;
    endurance: IDice;
    agility: IDice;
    intelligence: IDice;
    perception: IDice;
    willpower: IDice;
    sizeOptions: CharacterSize[];
    special?: string | undefined;
}

export const CharacterPoints = (start: number, agePhases: number[], expPhases: number[], age: number): number => {
    let p = start;
    if (agePhases.length !== expPhases.length) console.error('age Phases and expPhases must be of equal length!');
    let prevPhase = 0;
    for (var phase in agePhases) {
        let currentAgePhase = agePhases[phase];
        let expPhase = expPhases[phase];

        let ageRange = currentAgePhase - prevPhase;
        if (age > prevPhase) p += Math.min(age - prevPhase, ageRange) * expPhase;
        prevPhase = currentAgePhase;
    }

    return p;
}

export const getExperienceAges = (raceData: IRaceData, maxAge: number) => [...Array(maxAge)]
    .map((v: any, index: number, arr: any[]) => {
        return { age: index, exp: raceData.experiencePoints(index), mult: raceData.experienceMultipler(index) };
    });

