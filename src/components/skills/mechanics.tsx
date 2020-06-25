import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'repair machine',
        attribute: 'intelligence',
        description: 'repair a machine',
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
