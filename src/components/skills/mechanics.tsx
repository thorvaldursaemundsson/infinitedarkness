import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'repair machine',
        attribute: 'intelligence',
        description: 'repair a machine, takes 8 hours',
        results: [
            'maintain vehicle or machine: 25',
            'repair vehicle or machine: 30',
            'repair completely broken vehicle or machine: 35 (use replacement parts)',
            'gain +5 if working in team',
            'Take -10 to roll if no replacement parts available',
            'if success with more than 10: job is done in 4 hours',
            'if fail with more than 10: condition drops by 1 step'
        ],
        type: 'active'
    },
    {
        name: 'build device',
        attribute: 'intelligence',
        description: 'building a device',
        type: 'active'
    },
    {
        name: 'hotwire machine',
        attribute: 'intelligence',
        description: 'altering a machine to suit your needs',
        type: 'active'
    },
    {
        name: 'service robot',
        attribute: 'intelligence',
        description: 'servicing a robot',
        type: 'active'
    }
];
const Mechanics = new SkillTemplate('mechanics', 'black thumb', useCases);
export default Mechanics;
