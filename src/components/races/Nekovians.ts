import { IRacialMod } from "./Races";

export const nekovian: IRacialMod[] = [
    {
        ageSpan: [16, 24],
        species: 'nekovian',
        strength: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        endurance: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        agility: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        perception: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        intelligence: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        willpower: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        sizeOptions: ['tiny', 'small']
    },
    {
        ageSpan: [25, 36],
        species: 'nekovian',
        strength: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        endurance: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        agility: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        perception: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        intelligence: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        willpower: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        sizeOptions: ['tiny', 'small']
    },
    {
        ageSpan: [37, 60],
        species: 'nekovian',
        strength: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        endurance: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        agility: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        perception: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        intelligence: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        willpower: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        sizeOptions: ['tiny', 'small']
    },
    {
        ageSpan: [61, 120],
        species: 'nekovian',
        strength: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        endurance: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        agility: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        perception: { sidesPerDice: 4, numberOfDice: 1, pointBuyMod: -2 },
        intelligence: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        willpower: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        sizeOptions: ['tiny', 'small']
    },
];
