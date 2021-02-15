import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'unarmed attack',
        attribute: 'agility',
        description: 'punching kicking, deals 1d2 - 1 + strength / 5 (rounded down). Shambras using claw attack deal 1d6 + strength / 4',
        type: 'active',
        results: [
            'You gain +1 damage for every 10 points above the target defense',
            'you can do multiple attacks, at 6, 12, 18, 24, 30 you can do one extra at each, each time taking -3 penalty per extra attack'
        ]
    },
    {
        name: 'weapon attack',
        attribute: 'agility',
        description: 'weapons, damage based on weapon type',
        type: 'active',
        results: [
            'You gain +1 damage for every 10 points above the target defense',
            'you can do multiple attacks, at 6, 12, 18, 24, 30 you can do one extra at each, each time taking -3 penalty per extra attack'
        ]
    },
    {
        name: 'block',
        attribute: 'agility',
        description: 'use unarmed or weapon to block any attack, if successful only take 1/2 damage (round down, applied before damage reduction). Blocking ranged attacks takes -10 on your roll vs their roll. If you block with a weapon, shield or object it takes the damage. Requires that you see the attack.',
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