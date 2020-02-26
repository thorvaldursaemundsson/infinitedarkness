import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'hide emotion',
        attribute: 'intelligence',
        description: 'how hard you are to read',
        type: 'passive'
    },
    {
        name: 'deception',
        attribute: 'intelligence',
        description: 'telling outright lies or knowingly leading others to a false conclusion through omission of the truth',
        type: 'active'
    },
    
];
const Subtrefuge = new SkillTemplate('subtrefuge', '', useCases);
export default Subtrefuge;