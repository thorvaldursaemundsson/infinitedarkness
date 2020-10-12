import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'hide object',
        attribute: 'perception',
        description: 'hide an item somewhere, big items take a penalty, open places with few hiding spots take a penalty',
        results: [
            'Gain +5 if object is small',
            'Gain +5 if location has many hiding spots',
            'Lose -5 if object is large',
            'Lose -5 if location has few hiding spots'
        ],
        type: 'active'
    },
    {
        name: 'lockpick',
        attribute: 'agility',
        description: 'pick a conventional lock takes 3 minutes or less',
        results: [
            '15: simple lever tumbler',
            '20: complex lever tumbler and disk tumbler',
            '25: simple pin tumbler',
            '30: complex pin tumbler',
            'Succeed by 10, do it in 1d6 rounds',
            'Fail by 10, causes damage to lock, raises difficulty by 5 and if damaged twice it will be broken',
            'Some locks are designed to break immediately on any failed lock pick attempt'
        ],
        type: 'active'
    },
    {
        name: 'electronic lockpick',
        attribute: 'intelligence',
        description: 'pick an electronic lock, needs a highly specialized electronic lockpicking tool, might involve a hacking roll (computer). Takes 10 minutes',
        results: [
            'Infra-red key lock: 25',
            'Numb-pad key lock: 15',
            'password key lock: 20',
            'magnetic key lock: 30',
            'Fingerprint scan: 30',
            'Retina scan: 35',
            'DNA scan: 45'
        ],
        type: 'active'
    },
    {
        name: 'pick pocket',
        attribute: 'agility',
        description: 'remove or add an item to someones inventory without them realizing, they make a perception roll. Big and heavy items are harder to transfer. Takes 1-2 rounds',
        results: [
            '20+perception: tiny light item (single key, card)',
            '25+perception: small light item (keychain, wallet, pocket computer)',
            '30+perception: medium light item (hand gun, knife)',
            '-5 to your roll if they see you comming',
            '-10 to your roll if they expect pickpockets and keep their hands in their pockets',
            '+5 your roll if you have accomplice to distract them',
            '+5 to your roll if they are distracted'
        ],
        type: 'active'
    },
    {
        name: 'hide evidence of crime',
        attribute: 'perception',
        description: 'Hide evidence of crime, takes 2 hours',
        results: [
            '1-9: leave behind 20 clues or more',
            '10-15: leave behind 3d6 clues',
            '16-20: leave behind 2d6 clues',
            '21-25: leave behind 1d6 clues',
            '26-30: leave behind 1d4 clues',
            '31-35: leave behind 1d3 clues',
            '36-40: leave behind 1d2 clues',
            '41+: leave behind 1 clue',
            
        ],
        type: 'active'
    }

];
const Larceny = new SkillTemplate('larceny', 'crimes and stuff', useCases);
export default Larceny;