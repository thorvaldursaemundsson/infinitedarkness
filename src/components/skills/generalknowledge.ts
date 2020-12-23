import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'remember common fact',
        attribute: 'intelligence',
        description: 'you remember a commonly known helpful fact or gain insight based on fact. The GM may sometimes ask you to roll general knowledge',
        type: 'active',
        results: [
            'missinformation: 9 or less',
            'very common: 10-14',
            'common: 15-19',
            'uncommon: 20-24',
            'rare: 25-29',
            'very rare: 30-34',
            'extremely rare: 35+',
            'completely outside your sphere: -6 (something you can not have encountered)',
            'outside your sphere: -3 (something you should not have encountered)',
            'well within your sphere: +3 (the information pertains to something youre connected to)'
        ]
    },
];
const GeneralKnowledge = new SkillTemplate('general knowledge', 'so rare its a superpower', useCases);
export default GeneralKnowledge;