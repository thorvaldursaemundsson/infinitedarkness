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
        description: 'anything balance related such as walking on slippery surfaces, walking tight rope, staying upright on shaky ground, etc.'+
        'Walking on ice: if roll is 9 or less you slip and fall, 10-14 walk slowly, 15-19, walk normal, 20-24 jog, 25-29 run, 30+ sprint',
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
        type: 'active'
    }
];
const Acrobatics = new SkillTemplate('acrobatics', 'the ability to move around', useCases);
export default Acrobatics;