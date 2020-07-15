import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'cast spell',
        attribute: 'willpower',
        description: 'cast a spell',
        results: [
            'roll: 16-20: costs 4 mana to activate spell or ability',
            'roll: 21-25: costs 3 mana to activate spell or ability',
            'roll: 26-30: costs 1 mana to activate spell or ability',
            'roll: 31+: costs 1 mana to activate spell or ability'
        ],
        type: 'active'
    }
];
const Spells = new SkillTemplate('spells', 'spells', useCases);
export default Spells;
