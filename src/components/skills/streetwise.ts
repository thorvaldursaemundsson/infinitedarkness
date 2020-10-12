import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'fencing',
        attribute: 'intelligence',
        description: 'Find a fence to buy your stolen goods. Sell stolen goods to the white market. Take 4 hours to achieve.',
        results: [
            'find fence: 20',
            'sell hot stolen goods directly: 25',
            'In a city with more crime: +5 to roll',
            'In a town with less crime: -5 to roll',
            '"Looks like a cop": -10 to roll',
            'Is known to work in lawenforcement: -20 to roll',
            'In town youre not familiar with: -3 to roll',
            'In town youre familiar with: +3 to roll'
        ],
        type: 'active'
    },
    {
        name: 'black market',
        attribute: 'intelligence',
        description: 'Finding a black market actor takes time and is risky. Takes 4 hours',
        results: [
            'Critical failure: 10 or less: law enforcement finds you',
            'Failure: 11-15: criminals become suspicious of you',
            'Failure: 16-24: no effect',
            'Find market for illegal items: 30',
            'Find black market for legal items: 25',
            'In a city with lots of crime: +5 to roll',
            'In a town with less crime: -5 to roll',
            '"Looks like a cop": -10 to roll',
            'In town youre not familiar with: -3 to roll',
            'In town youre familiar with: +3 to roll'
        ],
        type: 'active'
    },
    {
        name: 'gangs',
        attribute: 'intelligence',
        description: 'Finding gangs, talking to gangs, etc',
        type: 'active'
    },
    {
        name: 'gossip',
        attribute: 'intelligence',
        description: 'Picking up local information, knowing what is important and true, and not becoming suspicious in the process. Takes a 4 hours',
        results: ['5 or below: gain no information and attract attention',
            '6-10: gain one piece of gossip and attract attention',
            '11-15: gain multiple pieces of gossip and attract attention',
            '16-20: gain multiple pieces of gossip, at least one is something you choose and attract attention',
            '21-25: gain multiple pieces of gossip, at least one is something you choose, no attention',
            '26 or above: gain multiple pieces of gossip, most of which is something you choose, no attention',
            'In town youre not familiar with: -3 to roll',
            'In town youre familiar with: +3 to roll'
        ],
        type: 'active'
    },
    {
        name: 'local culture',
        attribute: 'intelligence',
        description: 'knowledge of local culture',
        type: 'passive'
    }
];
const Streetwise = new SkillTemplate('streetwise', '', useCases);
export default Streetwise;