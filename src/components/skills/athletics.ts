import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'swim',
        attribute: 'endurance',
        description: 'how fast you swim, how long you can keep your breath',
        type: 'passive'
    },
    {
        name: 'run',
        attribute: 'endurance',
        description: 'how fast you run and how long you can run',
        type: 'passive'
    },
    {
        name: 'jump',
        attribute: 'endurance',
        description: 'how high and far you can jump',
        type: 'passive'
    },
    {
        name: 'climb',
        attribute: 'endurance',
        description: 'climbing',
        type: 'passive'
    },
];
const Athletics = new SkillTemplate('athletics', 'skillful use of stamina', useCases);
export default Athletics;