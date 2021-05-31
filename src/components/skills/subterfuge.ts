import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'hide emotion',
        attribute: 'intelligence',
        description: 'how hard you are to read, always take 10',
        type: 'passive'
    },
    {
        name: 'deception',
        attribute: 'intelligence',
        description: 'telling outright lies or knowingly leading others to a false conclusion through omission of the truth',
        type: 'active'
    },

];
const Subterfuge = new SkillTemplate('subterfuge', '', useCases);
export default Subterfuge;