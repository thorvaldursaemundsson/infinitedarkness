import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'fencing',
        attribute: 'intelligence',
        description: 'Find a fence to buy your stolen goods. Sell stolen goods to the white market.',
        type: 'active'
    },
    {
        name: 'black market',
        attribute: 'intelligence',
        description: 'Finding a black market actor takes time and is risky.',
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
        description: 'Picking up local information, knowing what is important and true, and not becoming suspicious in the process. Takes a full day',
        results: ['5 or below: gain no information and attract attention',
            '6-10: gain one piece of gossip and attract attention',
            '11-15: gain multiple pieces of gossip and attract attention',
            '16-20: gain multiple pieces of gossip, at least one is something you choose and attract attention',
            '21-25: gain multiple pieces of gossip, at least one is something you choose, no attention',
            '26 or above: gain multiple pieces of gossip, most of which is something you choose, no attention'
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