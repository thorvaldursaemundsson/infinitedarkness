import { IRaceData } from "./Races";

export const synthsData: IRaceData = {
    racialMods: [
        {
            ageSpan: [2, 300],
            species: 'human',
            strength: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            endurance: { sidesPerDice: 8, numberOfDice: 1, pointBuyMod: 0 },
            agility: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
            perception: { sidesPerDice: 12, numberOfDice: 1, pointBuyMod: 2 },
            intelligence: { sidesPerDice: 10, numberOfDice: 1, pointBuyMod: 1 },
            willpower: { sidesPerDice: 6, numberOfDice: 1, pointBuyMod: -1 },
            sizeOptions: ['tiny', 'small', 'medium', 'large', 'huge', 'gigantic']
        },
    ],
    experiencePoints: age => 300,
    experienceMultipler: age => 1
};