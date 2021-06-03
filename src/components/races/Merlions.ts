import { CharacterPoints, IRaceData } from "./Races";

export const merlionsData: IRaceData = {
    racialMods: [
        {
            ageSpan: [18, 40],
            species: 'merlion',
            strength: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            endurance: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            agility: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
            perception: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
            intelligence: { sidesPerDice: 8, numberOfDice: 2, pointBuyMod: 4 },
            willpower: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
            sizeOptions: ['tiny', 'small', 'medium']
        },
        {
            ageSpan: [41, 80],
            species: 'merlion',
            strength: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            endurance: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            agility: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            perception: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            intelligence: { sidesPerDice: 8, numberOfDice: 2, pointBuyMod: 4 },
            willpower: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
            sizeOptions: ['tiny', 'small', 'medium']
        },
        {
            ageSpan: [81, 120],
            species: 'merlion',
            strength: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            endurance: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            agility: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            perception: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            intelligence: { sidesPerDice: 8, numberOfDice: 2, pointBuyMod: 4 },
            willpower: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
            sizeOptions: ['tiny', 'small', 'medium']
        },
        {
            ageSpan: [121, 180],
            species: 'merlion',
            strength: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            endurance: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            agility: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            perception: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            intelligence: { sidesPerDice: 6, numberOfDice: 2, pointBuyMod: 3 },
            willpower: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            sizeOptions: ['tiny', 'small', 'medium']
        },
    ],
    experiencePoints: age => CharacterPoints(0, [16, 28, 50, 90], [10, 8, 6, 4], age),
    experienceMultipler: age => {
        if (age > 70) return 1;
        if (age > 60) return 1.5;
        if (age > 50) return 2;
        if (age > 35) return 2.5;
        if (age > 30) return 3;
        if (age > 26) return 3.5;
        if (age > 22) return 4;
        if (age > 18) return 4.5;
        return 5;
    },
};