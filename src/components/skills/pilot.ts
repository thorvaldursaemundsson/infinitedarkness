import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'drive car',
        attribute: 'perception',
        description: 'drive a car',
        type: 'active'
    },
    {
        name: 'drive boat',
        attribute: 'perception',
        description: 'drive a boat',
        type: 'active'
    },
    {
        name: 'drive ship',
        attribute: 'intelligence',
        description: 'driving a ship requires mutliple people',
        type: 'active'
    },
    {
        name: 'drive submarine',
        attribute: 'intelligence',
        description: 'driving a sub is very hard',
        type: 'active'
    },
    {
        name: 'pilot airplane',
        attribute: 'intelligence',
        description: 'the second hardest point is takeof, the hardest part is landing',
        type: 'active'
    },
    {
        name: 'pilot spaceship',
        attribute: 'intelligence',
        description: 'navigation requires understanding of orbital mechanics',
        type: 'active'
    },
    {
        name: 'pilot FTL',
        attribute: 'intelligence',
        description: 'knowing how to operate an FTL hyperdrive is hard',
        type: 'active'
    },
];
const Pilot = new SkillTemplate('pilot', 'driving car, boat, airplane, spaceship, horse', useCases);
export default Pilot;