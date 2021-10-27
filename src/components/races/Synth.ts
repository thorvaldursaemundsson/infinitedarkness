import { CharacterPoints, IRaceData } from "./Races";

export const synthsData: IRaceData = {
    racialMods: [
        {
            ageSpan: [2, 200],
            species: 'human',
            strength: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            endurance: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            agility: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
            perception: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
            intelligence: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
            willpower: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            sizeOptions: ['tiny', 'small', 'medium', 'large', 'huge', 'gigantic', 'colossal', 'titanic']
        },
    ], experiencePoints: age => CharacterPoints(200, [20, 100, 300], [4, 2, 1], age),
    experienceMultipler: age => {
        if (age > 100) return 2;
        if (age > 20) return 3;
        return 4;
    },
};