import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'cast spell',
        attribute: 'willpower',
        description: 'cast a spell, unless the spell description says otherwise uses an action, does not restrict movement and has no visible somatic or verbal requirement, you simply will it into existence.',
        results: [
            'Spell mana cost depends on how you use them',
            'The difficult is 4 + 4 x mana cost (1 mana = 8, 2 mana = 12, 3 mana = 16, etc)',
            'If you roll 1-5 points below difficulty you may choose to have it succeed at double mana cost',
            'If you roll 10+ points below difficulty the spell fails and you spend 1 additional mana per point of failure below 10 (so if difficulty is 24, you roll 12 you spend 4 + 2 = 6)',
            'If you roll 10+ above difficulty the spell costs 1 less mana (minimum 1)'
        ],
        type: 'active'
    },
    {
        name: 'regenerate mana',
        attribute: 'willpower',
        description: 'you regenerate 1 mana every 24 hours, if your mana goes into the negatives you can not cast any more spells. You also suffer a penalty to all active and passive rolls equal to your negative mana. Mana regeneration does not depend on rest.',
        type: 'passive'
    }
];
const Spells = new SkillTemplate('spells', 'You will a phenomenon into existence or use a mutations benefit.', useCases);
export default Spells;
