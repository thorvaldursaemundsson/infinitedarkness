import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'cast spell',
        attribute: 'willpower',
        description: 'cast a spell',
        results: [
            'Spell mana cost depends on how you use them',
            'The difficult is 6 x mana cost (1 mana = 6, 3 mana = 18, etc)',
            'If you roll 1-5 points below difficulty you may choose to have it succeed at double mana cost',
            'If you roll 10+ points below difficulty the spell fails and you spend 1 additional mana per point of failure below 10 (so if difficulty is 24, you roll 12 you spend 4 + 2 = 6)',
            'If you roll 10+ above difficulty the spell costs 1 less mana (minimum 1)'
        ],
        type: 'active'
    }
];
const Spells = new SkillTemplate('spells', 'spells', useCases);
export default Spells;
