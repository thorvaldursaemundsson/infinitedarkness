import { IRacialMod } from "./Races";

export const shambras: IRacialMod[] = [
    {
        ageSpan: [15, 20],
        species: 'shambras',
        strength: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        endurance: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        agility: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        perception: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        intelligence: { sidesPerDice: 4, numberOfDice: 1, pointBuyMod: -2 },
        willpower: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        sizeOptions: ['tiny', 'small', 'medium'],
        special: '-2 climb and swim -3 jump'
    },
    {
        ageSpan: [21, 25],
        species: 'shambras',
        strength: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        endurance: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        agility: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        perception: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        intelligence: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        willpower: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        sizeOptions: ['small', 'medium'],
        special: '-4 climb and swim -6 jump'
    },
    {
        ageSpan: [26, 35],
        species: 'shambras',
        strength: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        endurance: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        agility: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        perception: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        intelligence: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        willpower: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        sizeOptions: ['small', 'medium', 'large'],
        special: '-6 climb and swim -9 jump'
    },
    {
        ageSpan: [36, 50],
        species: 'shambras',
        strength: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        endurance: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        agility: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        perception: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        intelligence: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        willpower: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        sizeOptions: ['medium', 'large'],
        special: '-8 climb and swim -12 jump'
    },
    {
        ageSpan: [51, 100],
        species: 'shambras',
        strength: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        endurance: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        agility: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        perception: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        intelligence: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        willpower: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        sizeOptions: ['medium', 'large', 'huge'],
        special: '-10 climb and swim -15 jump'
    },
    {
        ageSpan: [101, 200],
        species: 'shambras',
        strength: { sidesPerDice: 6, numberOfDice: 2, pointBuyMod: 3 },
        endurance: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        agility: { sidesPerDice: 4, numberOfDice: 1, pointBuyMod: -1 },
        perception: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        intelligence: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        willpower: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        sizeOptions: ['large', 'huge'],
        special: '-10 climb and swim -15 jump'
    },
    {
        ageSpan: [201, 300],
        species: 'shambras',
        strength: { sidesPerDice: 8, numberOfDice: 2, pointBuyMod: 4 },
        endurance: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        agility: { sidesPerDice: 2, numberOfDice: 1, pointBuyMod: -2 },
        perception: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        intelligence: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        willpower: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        sizeOptions: ['large', 'huge', 'gigantic'],
        special: '-12 climb and swim -18 jump'
    },
];