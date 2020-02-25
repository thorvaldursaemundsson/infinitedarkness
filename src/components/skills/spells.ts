import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'cast spell',
        attribute: 'willpower',
        description: 'cast a spell',
        type: 'active'
    }
];
const Spells = new SkillTemplate('spells', 'spells', useCases);
export default Spells;
