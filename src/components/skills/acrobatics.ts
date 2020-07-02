import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'passive dodge',
        attribute: 'agility',
        description: 'when someone attacks you they must beat this number to land the hit or shot',
        type: 'passive'
    },
    {
        name: 'active dodge',
        attribute: 'agility',
        description: 'Roll 2d10 + this to dodge an attack, must be aware of attack. Single use action',
        type: 'active'
    },
    {
        name: 'balance',
        attribute: 'agility',
        description: 'anything balance related such as walking on slippery surfaces, walking tight rope, staying upright on shaky ground, etc.',
        results: [
            'Walk on slippery surface: 9 or less: failure',
            'Walk on slippery surface: 10-14: walk slowly',
            'Walk on slippery surface: 15-19: walk normal',
            'Walk on slippery surface: 20-24: job',
            'Walk on slippery surface: 25-29: run',
            'Walk on slippery surface: 30: unimpeded movement',
            'Walk on tightrope: same as slippery but 5 points harder',
        ],
        type: 'active'
    },
    {
        name: 'throwing',
        attribute: 'agility',
        description: 'throwing an item accurately and precisely at a target. The distance depends on your strength and the weight of the item. This is also used in combat when for example throwing weapons, bombs, etc',
        type: 'active'
    },
    {
        name: 'tumbling',
        attribute: 'agility',
        description: 'tumbling is a form of gymnastics, this can be used to reduce to reduce fall damage, jump quickly through hoops or any general fast movement through difficult terrain',
        results: [
            '4 or lower: worse outcome',
            'Reduce fall damage 1d6: 15',
            'Reduce fall damage 2d6: 25',
            'Move through difficult terrain: 9 or less: slow',
            'Move through difficult terrain: 10-14: normal speed',
            'Move through difficult terrain: 15-20: jog speed',
            'Move through difficult terrain: 21+: can move any speed'
        ],
        type: 'active'
    }
];
const Acrobatics = new SkillTemplate('acrobatics', 'the ability to move around', useCases);
export default Acrobatics;