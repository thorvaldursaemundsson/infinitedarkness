import { CharacterPoints, IRaceData } from "./Races";

export const humansData: IRaceData = {
    racialMods: [
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
    ],
    experiencePoints: age => CharacterPoints(0, [18, 26, 40, 80], [10, 8, 6, 4], age),
    experienceMultipler: age => {
        if (age > 60) return 1;
        if (age > 50) return 1.5;
        if (age > 40) return 2;
        if (age > 35) return 2.5;
        if (age > 30) return 3;
        if (age > 26) return 3.5;
        if (age > 22) return 4;
        if (age > 18) return 4.5;
        return 5;
    },
};