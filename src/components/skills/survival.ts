import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'forage',
        attribute: 'intelligence',
        description: 'finding drinkable water, items and food in the wild',
        results: [
            'fish: 20',
            'lay trap: 20',
            'track animal: 25',
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
