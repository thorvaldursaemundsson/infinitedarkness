import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'detect motive',
        attribute: 'intelligence',
        description: 'find out what people want, if this is higher than "hide emotion" (subtrefuge) then you gain information, if it is significantly below you gain false information. Takes 1 minute to analyse',
        type: 'passive'
    },
    {
        name: 'detect lies',
        attribute: 'intelligence',
        description: 'see through lies, rolls in the background everytime someone lies to you, role against "deception" (subtrefuge).',
        type: 'passive'
    },
];
const Empathy = new SkillTemplate('empathy', 'understanding people', useCases);
export default Empathy;
