import { CharacterSize } from "../Character";

export type race = 'human' | 'shambras' | 'merlion' | 'nekovian';

export interface IDice {
    numberOfDice: 1 | 2 | 3 | 4;
    sidesPerDice: 2 | 4 | 6 | 8 | 10 | 12;
    pointBuyMod: -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
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