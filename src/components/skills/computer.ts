import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'hacking',
        attribute: 'intelligence',
        description: 'hack into computers, takes 1 hour',
        results: [
            'Improve chances with larceny (electronic lockpick): 25, add roll - 25 to larceny',
            'hack password: 24 or higher to succeed',
            'hack very secure password: 34 or higher to succeed',
        ],
        type: 'active'
    },
    {
        name: 'craft software',
        attribute: 'intelligence',
        description: 'make computer programs, apps, drivers, services, etc. Takes 8 hours',
        results: [
            'craft single feature driver or application: 2 points',
            'craft complex software: 6 points',
            'architech software system: 12 points',
            'craft computer OS core or AI core: 40 points',
            'roll 21-30: add 1 software point',
            'roll 31-40: add 1d2 software point',
            'roll 41-50: add 1d3 software point',
        ],
        type: 'active'
    },
    {
        name: 'use computer',
        attribute: 'intelligence',
        description: 'You can use a computer to do research on the use of another skill, takes 10 minutes and gain a one time use +2',
        results: [
            'search internet: 10 or less -> wrong information',
            'search internet: 11-15 -> incomplete information',
            'search internet: 16-20 -> success',
            'search internet: 21-30 -> success and gain added insight',
            'if information sought is esoteric add -5 to roll',
            'if information sought is criminal or classified add -10 to roll'
        ],
        type: 'active'
    }
];
const Computer = new SkillTemplate('computer', 'googling stuff', useCases);
export default Computer;
