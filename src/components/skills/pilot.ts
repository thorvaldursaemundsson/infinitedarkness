import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'drive car',
        attribute: 'perception',
        description: 'drive a car, driving normally has a difficulty of 16',
        type: 'active'
    },
    {
        name: 'drive boat',
        attribute: 'perception',
        description: 'drive a boat, driving normally has a difficulty of 16',
        type: 'active'
    },
    {
        name: 'drive ship',
        attribute: 'intelligence',
        description: 'driving a ship requires mutliple people, driving normally has a difficulty of 24',
        type: 'active'
    },
    {
        name: 'drive submarine',
        attribute: 'intelligence',
        description: 'driving a sub is very hard, driving normally has a difficulty of 28',
        type: 'active'
    },
    {
        name: 'pilot airplane',
        attribute: 'intelligence',
        description: 'the second hardest point is takeof, the hardest part is landing, piloting an airplane under normal conditions has a difficulty of 28',
        type: 'active'
    },
    {
        name: 'pilot spaceship',
        attribute: 'intelligence',
        description: 'navigation requires understanding of orbital mechanics, piloting a spaceship has a difficulty of 28',
        type: 'active'
    },
    {
        name: 'pilot FTL',
        attribute: 'intelligence',
        description: 'knowing how to operate an FTL hyperdrive is hard, piloting FTL has a difficulty of 32',
        type: 'active'
    },
];
const Pilot = new SkillTemplate('pilot', 'driving car, boat, airplane, spaceship, horse', useCases);
export default Pilot;