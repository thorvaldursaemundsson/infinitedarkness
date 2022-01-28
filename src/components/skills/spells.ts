import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'cast spell',
        attribute: 'willpower',
        description: 'cast a spell, unless the spell description says otherwise it uses an action, does not restrict movement and has no visible somatic or verbal requirement, you simply will it into existence. Some mutations have active effects that costs mana, these counts as spells.',
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
        description: 'you regenerate 1 mana every 24 hours, if your mana goes into the negatives you can not cast any more spells or actively use mutations that require mana. You also suffer a penalty to all active and passive rolls equal to your negative mana. Mana regeneration does not depend on rest.',
        type: 'passive'
    },
    {
        name: 'acquire mutation',
        attribute: 'willpower',
        description: 'When you acquire a mutation roll 1d10 and consult the chart (Spells are always acquired immediately). The first time when you acquire a spell or mutation and spend experience points you are allowed to go into negative. However the next time you must have 10 experience points available. The experience points are spent BEFORE you roll and you MUST always take one. Once you have a mutation or spell they can never be removed.',
        type: 'active',
        results: [
            '1: You acquire the negative effects immediately and after 1d6 days acquire the positive effects',
            '2: The mutation slowly appears over the course of 1d4 days',
            '3: The mutation slowly appears over the course of 24 hours',
            '4: The mutation slowly appears over the course of 2d12 hours',
            '5: The mutation slowly appears over the course of 10d6 minutes',
            '6: The mutation appears over the course of 2d6 minutes',
            '7: The mutation appears over the course of 1d4 rounds',
            '8: The mutation appears at the end of your turn',
            '9: The mutation immediately appears',
            '10: The mutation immediately appears when you choose, you can wait up to 6 days after which it immediately appears at the start of your turn.',
        ]
    }
];
const Spells = new SkillTemplate('spells', 'You will a phenomenon into existence or use a mutations benefit.', useCases);
export default Spells;
