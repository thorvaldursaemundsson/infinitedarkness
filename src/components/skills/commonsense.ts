import { SkillTemplate, UseCase } from "../Skills";
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
const CommonSense = new SkillTemplate('common sense', 'so rare its a superpower', useCases);
export default CommonSense;