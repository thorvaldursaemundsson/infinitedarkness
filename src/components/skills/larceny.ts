import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'hide object',
        attribute: 'perception',
        description: 'hide an item somewhere, big items take a penalty, open places with few hiding spots take a penalty',
        type: 'active'
    },
    {
        name: 'lockpick',
        attribute: 'agility',
        description: 'pick a conventional lock',
        type: 'active'
    },
    {
        name: 'electronic lockpick',
        attribute: 'intelligence',
        description: 'pick an electronic lock',
        type: 'active'
    },
    {
        name: 'pick pocket',
        attribute: 'agility',
        description: 'lift an item out of someones pocket without them realizing',
        type: 'active'
    }
    
];
const Larceny = new SkillTemplate('larceny', '', useCases);
export default Larceny;