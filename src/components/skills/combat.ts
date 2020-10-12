import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'unarmed attack',
        attribute: 'agility',
        description: 'punching kicking, deals 1d2 + strength / 4 (rounded down). Shambras using claw attack deal 1d6 + strength / 4',
        type: 'active'
    },
    {
        name: 'weapon attack',
        attribute: 'agility',
        description: 'weapons, damage based on weapon type',
        type: 'active'
    },
    {
        name: 'block',
        attribute: 'agility',
        description: 'use unarmed or weapon to block any attack, if successful only take 1/2 damage (round down, applied before damage reduction). Blocking firearms takes -10 on your roll vs their roll. If you block with a weapon, shield or object it takes the damage.',
        results: [
            'gadget or gun typical breaking damage: 10',
            'wood typical breaking damage: 15',
            'plastic typical breaking damage: 18',
            'soft metal typical breaking damage: 22',
            'steel typical breaking damage: 25',
            'tital alloy typical breaking damage: 28'
        ],
        type: 'active'
    }
];
const Combat = new SkillTemplate('combat', 'the ability to move around', useCases);
export default Combat;