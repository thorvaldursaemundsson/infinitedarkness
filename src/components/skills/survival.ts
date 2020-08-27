import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'forage',
        attribute: 'intelligence',
        description: 'finding drinkable water, items and food in the wild',
        results: [
            'fish: 20, 1 meal',
            'fish: 25, 2 meals',
            'fish: 30, 4 meals',
            'fish: 35, 8 meals',
            'lay trap: 20',
            'track animal: 25',
            'track person: 28',
            'find roots and froots: 30'
        ],
        type: 'active'
    },

    {
        name: 'navigation in the wild',
        attribute: 'intelligence',
        description: 'navigating in the wild',
        type: 'active'
    },
    {
        name: 'build shelter',
        attribute: 'intelligence',
        description: 'build a shelter that protects you from exposure',
        type: 'active'
    },

];
const Survival = new SkillTemplate('survival', '', useCases);
export default Survival;
