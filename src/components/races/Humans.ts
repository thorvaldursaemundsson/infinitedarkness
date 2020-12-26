import { IRacialMod } from "./Races";

export const humans: IRacialMod[] = [
    {
        ageSpan: [18, 26],
        species: 'human',
        strength: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        endurance: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        agility: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        perception: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        intelligence: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        willpower: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        sizeOptions: ['small', 'medium', 'large']
    },
    {
        ageSpan: [27, 40],
        species: 'human',
        strength: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        endurance: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
        agility: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        perception: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        intelligence: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        willpower: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        sizeOptions: ['small', 'medium', 'large']
    },
    {
        ageSpan: [41, 80],
        species: 'human',
        strength: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        endurance: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        agility: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        perception: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        intelligence: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        willpower: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
        sizeOptions: ['small', 'medium', 'large']
    },
    {
        ageSpan: [81, 180],
        species: 'human',
        strength: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        endurance: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        agility: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        perception: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
        intelligence: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        willpower: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
        sizeOptions: ['small', 'medium', 'large']
    },
];