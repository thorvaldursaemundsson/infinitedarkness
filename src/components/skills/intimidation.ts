import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'interrogation',
        attribute: 'willpower',
        description: 'force someone to give you answers',
        type: 'active'
    },
    {
        name: 'frighten',
        attribute: 'willpower',
        description: 'emit a terrifying display of power and ill intent to cause viewers to fear you, enemies must roll willpower vs your roll or take 1d6 fear damage (plus 1 per 5 you exceed their roll)',
        type: 'active'
    },
    {
        name: 'spook',
        attribute: 'willpower',
        description: 'while talking to someone for a while you instill in them a sense of dread, every 10 minutes they must roll willpower vs your roll or take 1d4 fear damage (plus 1 per 5 you exceed their roll)',
        type: 'active'
    }
];
const Intimidation = new SkillTemplate('intimidation', 'making people feel small and you big', useCases);
export default Intimidation;