import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'unarmed attack',
        attribute: 'agility',
        description: 'punching kicking, deals 1d2 + strength / 4 (rounded down)',
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
        description: 'use unarmed or weapon to block any attack, if successful only take 1/2 damage (round down, applied before damage reduction). Blocking firearms takes -10 on your roll vs their roll',
        type: 'active'
    }
];
const Combat = new SkillTemplate('combat', 'the ability to move around', useCases);
export default Combat;