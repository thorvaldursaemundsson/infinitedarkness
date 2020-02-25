import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'search',
        attribute: 'perception',
        description: 'you look for hidden objects, items are hidden with the larceny skill, roll vs hiders roll',
        type: 'active'
    },
    {
        name: 'crime scene investigation',
        attribute: 'intelligence',
        description: 'you examine a crime scene, every hour of investigation has a chance to find a clue, roll vs 16 to find the first one, each clue raises difficulty by 4, maximum 10 attempts can be made no matter how few or many clues you have found',
        type: 'active'
    },
    
    {
        name: 'solve enigma',
        attribute: 'intelligence',
        description: 'solving puzzles, enigmas, mysteries. You roll to put it together, see connections and understand the mystery',
        type: 'active'
    },
    
];
const Investigation = new SkillTemplate('investigation', 'finding out the butler did it after all', useCases);
export default Investigation;