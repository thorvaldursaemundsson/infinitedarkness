import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'unarmed attack',
        attribute: 'agility',
        description: 'punching kicking',
        type: 'passive'
    },
    {
        name: 'weapon attack',
        attribute: 'agility',
        description: 'weapons',
        type: 'active'
    },
    {
        name: 'block',
        attribute: 'agility',
        description: 'use unarmed or weapon to block attack, if successful only take 1/2 damage (round down, applied before damage reduction)',
        type: 'active'
    }
];
const Combat = new SkillTemplate('combat', 'the ability to move around', useCases);
export default Combat;