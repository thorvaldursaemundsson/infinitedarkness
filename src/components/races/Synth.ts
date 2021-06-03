import { IRaceData } from "./Races";

export const synthsData: IRaceData = {
    racialMods: [
        {
            ageSpan: [2, 300],
            species: 'human',
            strength: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            endurance: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
            agility: { sidesPerDice: 8, numberOfDice: 2, pointBuyMod: 4 },
            perception: { sidesPerDice: 8, numberOfDice: 2, pointBuyMod: 4 },
            intelligence: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
            willpower: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            sizeOptions: ['tiny', 'small', 'medium', 'large', 'gigantic']
        },
    ],
    experiencePoints: age => 300,
    experienceMultipler: age => 1
};