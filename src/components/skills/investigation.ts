import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'search',
        attribute: 'perception',
        description: 'you look for hidden objects, items are hidden with the larceny skill, roll vs hiders roll, takes 1 hour',
        results: [
            'larceny minus 6 or more: You find nothing and you are confident there is nothing to find, may not try again',
            'larceny minus 1-5: You suspect theres something to find, takes 3 days to find object',
            'larceny plus 0-5: You find hidden object within 2 hours',
            'larceny plus 6-10: you find hidden object within 1 hour',
            'larceny plus 11-15: you find hidden object within 30 minutes',
            'larceny plus 16-20: you find hidden object within 15 minutes',
            'larceny plus 21+: you find hidden object at a glance immediately'
        ],
        type: 'active'
    },
    {
        name: 'crime scene investigation',
        attribute: 'perception',
        description: 'you examine a crime scene, takes 1 hour to find clues, number of maximum clues depend on criminal larceny skill to hide evidence',
        results: [
            'find clues 0-15: find 1 wrong or missleading clue',
            'find clues 16-20: no clues',
            'find clues 21-25: find 1 clue',
            'find clues 26-30: find 1d6 clue',
            'find clues 31-35: find 2d6 clues',
        ],
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