import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'active dodge',
        attribute: 'agility',
        description: 'Roll 1d10, add it to your active defense until its your turn again. Can be done as a reaction if you see that someone is attempting to attack you.',
        type: 'active'
    },
    {
        name: 'balance',
        attribute: 'agility',
        description: 'anything balance related such as walking on slippery surfaces, walking tight rope, staying upright on shaky ground, etc. Can be done as a part of a move action',
        results: [
            'Walk on slippery surface: 9 or less: failure',
            'Walk on slippery surface: 10-14: walk slowly',
            'Walk on slippery surface: 15-19: walk normal',
            'Walk on slippery surface: 20-24: jog',
            'Walk on slippery surface: 25-29: run',
            'Walk on slippery surface: 30: unimpeded movement',
            'Walk on tightrope: same as slippery but -5 to roll',
        ],
        type: 'active'
    },
    {
        name: 'reduce falling damage',
        attribute: 'agility',
        description: 'You can reduce falling damage, either by diving into a liquid or tumbling on the ground.',
        results: [
            '5 or less: increase by 1 meter',
            '15: reduce by 1 meter',
            '20: reduce by 2 meters',
            '25: reduce by 3 meters',
            '30: reduce by 4 meters',
            '35: reduce by 5 meters',
            '40: reduce by 6 meters',
            '45: reduce by 7 meters',
            '50: reduce by 8 meters'
        ],
        type: 'active'
    }
];
const Acrobatics = new SkillTemplate('acrobatics', 'the ability to move around', useCases);
export default Acrobatics;