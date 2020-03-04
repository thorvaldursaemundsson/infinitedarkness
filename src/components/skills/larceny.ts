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
        description: 'pick a conventional lock, lever-tumblers range from 15-25, disk-tumblers and pin-tumblers range from 20-30',
        type: 'active'
    },
    {
        name: 'electronic lockpick',
        attribute: 'intelligence',
        description: 'pick an electronic lock, needs a highly specialized electronic lockpicking tool, might involve a hacking roll (computer). Difficulty ranges from 20-40',
        type: 'active'
    },
    {
        name: 'pick pocket',
        attribute: 'agility',
        description: 'remove or add an item to someones inventory without them realizing, they make a perception roll. Big and heavy items are harder to transfer, take -1 to your roll for every 10cl bulk and -1 for every 100grams of weight',
        type: 'active'
    }
    
];
const Larceny = new SkillTemplate('larceny', '', useCases);
export default Larceny;