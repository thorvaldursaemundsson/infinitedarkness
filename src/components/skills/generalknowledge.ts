import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'remember common fact',
        attribute: 'intelligence',
        description: 'you remember a commonly known helpful fact or gain insight based on facct',
        results: [
        ],
        type: 'active'
    },
];
const GeneralKnowledge = new SkillTemplate('general knowledge', 'so rare its a superpower', useCases);
export default GeneralKnowledge;