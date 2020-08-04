import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'prepare meal',
        attribute: 'perception',
        description: 'make food to eat',
        results: [
        ],
        type: 'active'
    },
];
const Cooking = new SkillTemplate('cooking', '', useCases);
export default Cooking;