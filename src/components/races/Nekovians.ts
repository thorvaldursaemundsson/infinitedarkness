import { CharacterPoints, IRaceData } from "./Races";


export const nekovianData: IRaceData = {
    racialMods: [
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
    ],
    experiencePoints: age => CharacterPoints(0, [16, 24, 36, 80], [10, 8, 6, 4], age),
    experienceMultipler: age => {
        if (age > 60) return 1;
        if (age > 50) return 1.5;
        if (age > 40) return 2;
        if (age > 30) return 2.5;
        if (age > 26) return 3;
        if (age > 24) return 3.5;
        if (age > 20) return 4;
        if (age > 16) return 4.5;
        return 5;
    },
};