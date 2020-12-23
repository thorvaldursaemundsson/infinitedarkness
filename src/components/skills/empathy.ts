import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'detect motive',
        attribute: 'intelligence',
        description: 'find out what people want, if this is higher than "hide emotion" (subtrefuge) then you gain information, if it is significantly below you gain false information. May take 4 at a glance, take 10 from 1 minute interaction or observation. May take 15 if youve spent multiple days with them at GM discretion.',
        type: 'active',
        results: [
            'Cant see their face: -5',
            'Cross culture same species: -2',
            'Cross species: -5',
            'Cross species (Shambra vs any but Merlion): -6 (the shambra mindset is slightly more alien to other species)',
            'Cross species (Merlion vs any): -8 (the merlion mindset is especially alien to other species)'
        ]
    },
    {
        name: 'detect lies',
        attribute: 'intelligence',
        description: 'see through lies, always take 10 vs "deception" (subtrefuge). When detecting lies at a penalty you should be automatically distrustful due to inability to tell truth from fiction.',
        type: 'passive',
        results: [
            'Cant see their face: -5',
            'Cross culture same species: -2',
            'Cross species: -5',
            'Cross species (Shambra): -6 (the shambra mindset is slightly more alien to other species)',
            'Cross species (Merlion): -8 (the merlion mindset is especially alien to other species)'
        ]
    },
];
const Empathy = new SkillTemplate('empathy', 'understanding people', useCases);
export default Empathy;
