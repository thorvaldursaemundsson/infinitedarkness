import { CharacterPoints, IRaceData } from "./Races";

export const synthsData: IRaceData = {
    racialMods: [
        {
            ageSpan: [2, 200],
            species: 'human',
            strength: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            endurance: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            agility: { sidesPerDice: 6, numberOfDice: 2, pointBuyMod: 3 },
            perception: { sidesPerDice: 6, numberOfDice: 2, pointBuyMod: 3 },
            intelligence: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
            willpower: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            sizeOptions: ['tiny', 'small', 'medium', 'large', 'huge', 'gigantic', 'colossal', 'titanic']
        },
    ], experiencePoints: age => CharacterPoints(200, [20, 100, 300], [4, 2, 1], age),
    experienceMultipler: age => {
        if (age > 100) return 2;
        if (age > 20) return 3;
        return 4;
    },
};