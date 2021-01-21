import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'active dodge',
        attribute: 'agility',
        description: 'Roll 2d10 + agility + acrobatics to dodge, only the first to hit you while you do this will land, maximum one bullet. Counts as normal action and only normal movement is allowed.',
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
        name: 'throwing',
        attribute: 'agility',
        description: 'throwing an item accurately and precisely at a target. The distance depends on your strength and the weight of the item. This is also used in combat when for example throwing weapons, bombs, etc',
        results: [
            '4-10: hit 1 meter object in 5 meters away (to hit a smaller object, assume same difficulty as if it was farther away)',
            '11-15: hit 1 meter object in 10 meters away',
            '16-20: hit 1 meter object in 20 meters away',
            '21-25: hit 1 meter object in 40 meters away',
            '26-30: hit 1 meter object in 80 meters away',
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