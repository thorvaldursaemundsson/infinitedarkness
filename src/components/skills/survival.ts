import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'forage',
        attribute: 'willpower',
        description: 'find drinkable water, hunt fauna or gather edible flora. Takes 8 hours. The type of food you find depends on your biome. Barren worlds can not be foraged. Without tools it is assume that you crafted tools and they were used up in the act of gathering food.',
        results: [
            'Survival 20: ingredients for 1 meal',
            'Survival 25: ingredients for 2 meals',
            'Survival 30: ingredients for 3 meals',
            'Survival 35: ingredients for 4 meals',
            'Rush (4h): take -10 to roll to speed up the process. Still uses the effort of 8h',
            'Exhaustion or over carry capacity: -3 per step',
            'Outside of familiar biome: -5 to roll',
            'Harsh biome: -5 to roll',
            'Almost barren biome: -10 to roll',
            'Find immediately edible food: -5 to roll',
            'Have access to hunters/foraging tools: +10 to roll'
        ],
        type: 'active'
    },
    {
        name: 'wilderness orientation',
        attribute: 'intelligence',
        description: 'find your way through the wilderness',
        results: [
            'find north: 10',
            'backtrack: 15'
        ],
        type: 'active'
    },
    {
        name: 'build shelter',
        attribute: 'intelligence',
        description: 'build a shelter that protects you from exposure, depending on your roll and the environment will give you different levels of exposure. Building a shelter takes 8 hours to construct and 1 hour daily to maintain. Level 1 protection gives horrible quality sleep, level 2 gives bad quality sleep, level 3 gives adequate quality sleep. level 4 gives good quality sleep. level 5 gives fantastic quality sleep',
        results: [
            'Critical failure 5: no protection, materials destroyed',
            'Failure 10: no protection, materials recoverable',
            'Bad 15: 1 levels of protection',
            'Adequate 20: 2 levels of protection',
            'Good 25: 3 levels of protection',
            'Great 30: 4 levels of protection',
            'Fantastic 35: 5 levels of protection',
            'Temperature range outside 5-35: -5 to roll',
            'Temperature range outside -10 - 45: -10 to roll',
            'Temperature range outside -30 - 60: -15 to roll',
            'High winds: -5 to roll',
            'Extreme winds: -10 to roll',
            'Heavy rain: -5 to roll',
            'Monsoon: -10 to roll',
            'Build shelter for multiple people: -2 per person capacity, max 5',
            'Have access to tent and bedroll: +5 to roll',
            'Have access to wilderness tools: +5 to roll'
        ],
        type: 'active'
    },

];
const Survival = new SkillTemplate('survival', '', useCases);
export default Survival;
