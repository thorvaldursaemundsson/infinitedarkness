import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'detect motive',
        attribute: 'intelligence',
        description: 'find out what people want',
        type: 'passive'
    },
    {
        name: 'detect lies',
        attribute: 'intelligence',
        description: 'see through lies',
        type: 'passive'
    },
];
const Empathy = new SkillTemplate('empathy', 'understanding people', useCases);
export default Empathy;
